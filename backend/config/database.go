package config

import (
	"backend/main/models"
	"fmt"
	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"log"
	"os"
)

var Database *gorm.DB

func ConnectDb() error {
	if loadEnv := godotenv.Load("local.env"); loadEnv != nil {
		log.Fatalf("Some error occured. Err: %s", loadEnv)
	}

	var err error
	var DATABASE_URI string = fmt.Sprintf("%s:%s@tcp(%s:%s)/%s",
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_HOST"),
		os.Getenv("DB_PORT"),
		os.Getenv("DB_NAME")) + "?charset=utf8mb4&parseTime=True&loc=Local"

	Database, err = gorm.Open(mysql.Open(DATABASE_URI), &gorm.Config{
		SkipDefaultTransaction: true,
		PrepareStmt:            true,
	})

	if err != nil {
		panic(err)
	}

	Database.AutoMigrate(&models.User{})

	return nil
}