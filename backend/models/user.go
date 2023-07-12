package models

import (
	"errors"
	validation "github.com/go-ozzo/ozzo-validation"
	"github.com/go-ozzo/ozzo-validation/is"
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	ID         uint   `json:"id" gorm:"primaryKey"`
	Email      string `json:"email"`
	Password   string `json:"password"`
	RePassword string `json:"rePassword"`
}

func (user User) Validate() error {
	return validation.ValidateStruct(&user,
		validation.Field(&user.Email, validation.Required, is.Email, validation.Length(5, 36)),
		validation.Field(&user.Password, validation.Required, validation.Length(3, 6)),
		validation.Field(&user.RePassword, validation.By(checkConfirmPassword(user))),
	)
}

func checkConfirmPassword(user User) validation.RuleFunc {
	return func(value interface{}) error {
		s, _ := value.(string)
		if s != user.Password {
			return errors.New("confirmation password is not correct!")
		}
		return nil
	}
}
