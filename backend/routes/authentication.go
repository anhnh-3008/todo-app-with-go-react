package routes

import (
	"backend/main/config"
	"backend/main/models"
	"time"

	"github.com/gofiber/fiber/v2"
)

func Login(c *fiber.Ctx) error {
	payload := struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}{}

	if err := c.BodyParser(&payload); err != nil {
		return c.Status(503).SendString(err.Error())
	}

	var user models.User
	result := config.Database.Find(&user, "email = ? and password = ?", payload.Email, payload.Password)

	if result.RowsAffected == 0 {
		return c.SendStatus(404)
	}

	cookie := new(fiber.Cookie)
	cookie.Name = "User ID"
	cookie.Value = string(user.ID)
	cookie.Expires = time.Now().Add(10 * time.Minute)
	c.Cookie(cookie)
	return c.Status(200).JSON(fiber.Map{
		"message": "Login Success",
		"user":    user,
	})
}

func Signup(c *fiber.Ctx) error {
	user := new(models.User)

	if err := c.BodyParser(user); err != nil {
		return c.Status(503).SendString(err.Error())
	}

	if valid := user.Validate(); valid != nil {
		return c.Status(400).JSON(fiber.Map{
			"message": "Invalid",
			"Error":   valid,
		})
	}
	config.Database.Create(&user)
	return c.Status(201).JSON(fiber.Map{
		"message": "Signup Success",
		"user":    user,
	})
}

func DeleteUser(c *fiber.Ctx) error {
	id := c.Params("id")
	var user models.User

	result := config.Database.Delete(&user, id)

	if result.RowsAffected == 0 {
		return c.SendStatus(404)
	}

	return c.SendStatus(200)
}
