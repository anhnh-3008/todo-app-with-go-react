package routes

import (
	"backend/main/config"
	"backend/main/models"

	"github.com/gofiber/fiber/v2"
	"strconv"
)

func GetAllEvent(c *fiber.Ctx) error {
	var user models.User
	var events []models.Event

	resultUser := config.Database.Find(&user, c.Get("User-ID"))
	if resultUser.RowsAffected == 0 {
		return c.Status(404).SendString("Cannot find your account")
	}
	config.Database.Model(&user).Association("Events").Find(&events)

	count := 0
	for _, event := range events {
		if event.Status == "done" {
			count++
		}
	}

	return c.Status(200).JSON(fiber.Map{
		"message":      "Get List Event Success",
		"events":       events,
		"total_events": len(events),
		"done_events":  count,
	})
}

func GetEvent(c *fiber.Ctx) error {
	id := c.Params("id")

	var user models.User
	var event models.Event
	resultUser := config.Database.Find(&user, c.Get("User-ID"))
	if resultUser.RowsAffected == 0 {
		return c.Status(404).SendString("Cannot find your account")
	}

	result := config.Database.Find(&event, id)

	if result.RowsAffected == 0 {
		return c.SendStatus(404)
	}

	return c.Status(200).JSON(fiber.Map{
		"message": "Get Event",
		"user":    event,
	})
}

func CreateEvent(c *fiber.Ctx) error {
	var user models.User
	var event models.Event

	resultUser := config.Database.Find(&user, c.Get("User-ID"))
	if resultUser.RowsAffected == 0 {
		return c.Status(404).SendString("Cannot find your account")
	}

	if err := c.BodyParser(&event); err != nil {
		return c.Status(503).SendString(err.Error())
	}

	event.UserID, _ = strconv.Atoi(c.Get("User-ID"))

	if valid := event.Validate(); valid != nil {
		return c.Status(400).JSON(fiber.Map{
			"message": "Invalid",
			"Error":   valid,
		})
	}

	config.Database.Create(&event)
	return c.Status(201).JSON(fiber.Map{
		"message": "Create Success",
		"event":   event,
	})
}

func UpdateEvent(c *fiber.Ctx) error {
	var event models.Event
	idEvent := c.Params("id")
	result := config.Database.Find(&event, "id = ? and user_id = ?", idEvent, c.Get("User-ID"))
	if result.RowsAffected == 0 {
		return c.Status(404).SendString("Cannot find your event!")
	}

	if err := c.BodyParser(&event); err != nil {
		return c.Status(503).SendString(err.Error())
	}

	if valid := event.Validate(); valid != nil {
		return c.Status(400).JSON(fiber.Map{
			"message": "Invalid",
			"Error":   valid,
		})
	}

	config.Database.Save(&event)
	return c.Status(201).JSON(fiber.Map{
		"message": "Update Success",
		"event":   event,
	})
}

func DeleteEvent(c *fiber.Ctx) error {
	var event models.Event
	id := c.Params("id")
	result := config.Database.Find(&event, "id = ? and user_id = ?", id, c.Get("User-ID"))
	if result.RowsAffected == 0 {
		return c.Status(404).SendString("Cann't find your event!")
	}

	deleted := config.Database.Delete(&event, id)

	if deleted.RowsAffected == 0 {
		return c.Status(500).SendString("Something went wrong")
	}

	return c.Status(200).JSON(fiber.Map{
		"message": "Delete Success",
		"event":   event,
	})
}
