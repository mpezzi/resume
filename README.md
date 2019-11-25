# Resume

## Introduction

_Resume_ is an Angular application that renders your resume using a JSON file.

## Usage

To install the application, clone out this repository to your computer, and place your `resume.json` file in the following path `./src/assets/data/resume.json`. See `resume.json` for a reference resume file.

```bash
git clone git@github.com:mpezzi/resume.git
```

Go to the resume folder:

```bash
cd resume
```

Install the application dependencies using:

```bash
npm install
```

Start the application locally:

```bash
npm start
```

Build the application to deploy to production:

```bash
npm run build
```

## Libraries

This project showcases the following libraries:

* [Angular](https://github.com/angular/angular)
* [Angular CLI](https://github.com/angular/angular-cli)
* [NgRX Store](https://github.com/ngrx/platform/blob/master/docs/store/README.md)
* [NgRX Effects](https://github.com/ngrx/platform/blob/master/docs/effects/README.md)
* [RxJS](https://github.com/ReactiveX/rxjs)

## Example

```json
{
  "introduction": {
    "name": "John Doe",
    "job_title": "Web Developer",
    "preamble": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "mail": "mail@mail.com",
    "image": "https://via.placeholder.com/400",
    "social_media": [
      {
        "icon": "fa-github",
        "name": "Github",
        "link": "https://github.com/example"
      },
      {
        "icon": "fa-linkedin-in",
        "name": "LinkedIn",
        "link": "https://www.linkedin.com/in/example"
      },
      {
        "icon": "fa-instagram",
        "name": "Instagram",
        "link": "https://www.instagram.com/example"
      },
      {
        "icon": "fa-twitter",
        "name": "Twitter",
        "link": "https://twitter.com/example"
      }
    ]
  },
  "experience": [
    {
      "uuid": "1abb2952-e6e5-49fe-b10a-73544cd6e680",
      "job": "Job Title 1",
      "company": "Company Name",
      "duration": "April 2019 - Present",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "highlights": [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      ],
      "start_at": "2019-01-01T00:00:00-04:00",
      "end_at": null
    },
    {
      "uuid": "5d3c3b51-b30e-4f13-b09e-1754c708676c",
      "job": "Job Title 2",
      "company": "Company Name",
      "duration": "January 2016 - March 2019",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "highlights": [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      ],
      "start_at": "2016-01-01T00:00:00-04:00",
      "end_at": null
    }
  ],
  "education": [
    {
      "uuid": "fb9f095a-64e4-4b6b-8d81-1fe7b145c1c5",
      "school": "Scrum Alliance",
      "course": "Scrum Product Owner",
      "duration": "2016",
      "description": "Certification",
      "start_at": "2016-01-01T00:00:00-04:00",
      "end_at": null
    }
  ],
  "skill": [
    {
      "uuid": "ff6f1f4b-edbf-437b-ad59-54075c1cb562",
      "label": "Angular",
      "start_at": "2015-01-01T00:00:00-04:00",
      "end_at": null
    },
    {
      "uuid": "f4b2d400-0b1e-484d-a5cc-44f4beadec1e",
      "label": "Angular CLI",
      "start_at": "2016-01-01T00:00:00-04:00",
      "end_at": null
    }
  ],
  "interest": [
    {
      "uuid": "ff740a15-9f57-42a9-975b-bef3becd94dc",
      "label": "Photography",
      "start_at": "2006-01-01T00:00:00-04:00",
      "end_at": null
    },
    {
      "uuid": "8f8a8459-23e6-4f1f-a927-46a3817b202c",
      "label": "Music",
      "start_at": "2001-01-01T00:00:00-04:00",
      "end_at": null
    }
  ]
}
```
