package pet

import (
	"github.com/scarlettmiss/bestPal/cmd/server/types/user"
	"time"
)

type PetResponse struct {
	Id            string            `json:"id"`
	Name          string            `json:"name"`
	DateOfBirth   time.Time         `json:"dateOfBirth"`
	Sex           string            `json:"sex"`
	BreedName     string            `json:"breedName"`
	Colors        []string          `json:"colors"`
	Description   string            `json:"description,omitempty"`
	Pedigree      string            `json:"pedigree,omitempty"`
	Microchip     string            `json:"microchip,omitempty"`
	WeightHistory []WeightEntry     `json:"weightHistory,omitempty"`
	Owner         user.UserResponse `json:"ownerId"`
	Vet           user.UserResponse `json:"vetId,omitempty"`
	Metas         map[string]string `json:"metas"`
}
