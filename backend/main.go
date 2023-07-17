package main

import (
	"backend/main/config"
	"backend/main/routes"
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()
	fmt.Println("⚡️ Server is running ⚡️")
	config.ConnectDb()

	app.Post("/api/login", routes.Login)
	app.Post("/api/signup", routes.Signup)
	app.Delete("/api/user/:id", routes.DeleteUser)

	// Event Routes
	app.Get("/api/events", routes.GetAllEvent)
	app.Get("/api/event/:id", routes.GetEvent)
	app.Post("/api/event", routes.CreateEvent)
	app.Patch("/api/event/:id", routes.UpdateEvent)
	app.Delete("/api/event/:id", routes.DeleteEvent)

	log.Fatal(app.Listen(":8080"))
}
