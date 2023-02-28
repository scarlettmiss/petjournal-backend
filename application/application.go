package application

import (
	petService "github.com/scarlettmiss/bestPal/application/services/petService"
	treatmentService "github.com/scarlettmiss/bestPal/application/services/treatmentService"
	userService "github.com/scarlettmiss/bestPal/application/services/userService"
)

/*
what the actor can do.
application talks with all the services
*/
type Application struct {
	petService       petService.Service
	userService      userService.Service
	treatmentService treatmentService.Service
}

type Options struct {
	PetService       petService.Service
	UserService      userService.Service
	TreatmentService treatmentService.Service
}

func New(opts Options) (*Application, error) {
	app := Application{petService: opts.PetService, userService: opts.UserService, treatmentService: opts.TreatmentService}

	return &app, nil
}
