package main

import (
	"backend/main/config"
	"backend/main/routes"
	"fmt"
	"github.com/gofiber/fiber/v2"
	"log"
)

func main() {
	app := fiber.New()
	fmt.Println("⚡️ Server is running ⚡️")
	config.ConnectDb()

	app.Get("/api/login", routes.Login)
	app.Post("/api/signup", routes.Signup)
	app.Delete("/api/user/:id", routes.DeleteUser)

	log.Fatal(app.Listen(":8080"))
}
