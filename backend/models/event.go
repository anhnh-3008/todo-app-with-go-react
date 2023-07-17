package models

import (
	"time"

	validation "github.com/go-ozzo/ozzo-validation"
	"gorm.io/gorm"
)

type Status string

const (
	Progress Status = "progress"
	Done     Status = "done"
)

type Event struct {
	gorm.Model
	ID          uint `json:"ID" gorm:"primaryKey"`
	UserID      int
	User        *User     `json:",omitempty" gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL,references:UserID;"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	Status      Status    `json:"status" gorm:"type:enum('progress', 'done')"`
	StartTime   time.Time `json:"start_time"`
	EndTime     time.Time `json:"end_time"`
}

func (event Event) Validate() error {
	return validation.ValidateStruct(&event,
		validation.Field(&event.UserID, validation.Required),
		validation.Field(&event.Title, validation.Required, validation.Length(1, 25)),
		validation.Field(&event.Description, validation.Length(1, 125)),
		// validation.Field(&event.Status, validation.Required, validation.In("progress", "done")),
	)
}
