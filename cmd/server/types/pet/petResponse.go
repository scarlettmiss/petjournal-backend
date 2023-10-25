package pet

import (
	"github.com/scarlettmiss/bestPal/cmd/server/types/user"
	"time"
)

type PetResponse struct {
	Id          string            `json:"id"`
	CreatedAt   time.Time         `json:"createdAt"`
	UpdatedAt   time.Time         `json:"updatedAt"`
	Deleted     bool              `json:"deleted"`
	Name        string            `json:"name"`
	DateOfBirth time.Time         `json:"dateOfBirth"`
	Gender      string            `json:"gender"`
	BreedName   string            `json:"breedName"`
	Colors      []string          `json:"colors"`
	Description string            `json:"description,omitempty"`
	Pedigree    string            `json:"pedigree,omitempty"`
	Microchip   string            `json:"microchip,omitempty"`
	Owner       user.UserResponse `json:"owner"`
	Vet         user.UserResponse `json:"vet,omitempty"`
	Metas       map[string]string `json:"metas"`
	Avatar      string            `json:"avatar"`
}
