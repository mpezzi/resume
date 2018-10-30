# Resume

## Introduction

_Resume_ is an Angular application that renders your resume using a JSON file.

## Usage

To install the application, clone out this repository to your computer, and place your `resume.json` file in the following path `./src/assets/data/resume.json`. See `resume-example.json` for a reference resume file.

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
    "job_title": "Current Job Title",
    "preamble": "Introduction copy.",
    "mail": "user@mail.com",
    "social_media": [
      {
        "icon": "fa-github",
        "name": "Github",
        "link": "https://github.com/github"
      }
    ]
  },
  "experiences": [
    {
      "uuid": "1c7e3412-fb01-465c-b2ea-a9f3c69f4946",
      "job": "Software Engineer",
      "company": "Company Name",
      "duration": "2018",
      "description": "Experience Description",
      "highlights": [
        "Highlights of the experience"
      ],
      "start_at": "2002-01-01T00:00:00Z",
      "end_at": "2011-01-01T00:00:00Z"
    }
  ],
  "educations": [
    {
      "uuid": "72cf352b-9f03-4bad-a46a-08da577ae6cb",
      "school": "The School Name",
      "course": "The Course Name",
      "duration": "2017 - 2018",
      "description": "The Course Description",
      "start_at": "2017-01-01T00:00:00Z",
      "end_at": null
    }
  ],
  "skills": [
    {
      "uuid": "ff6f1f4b-edbf-437b-ad59-54075c1cb562",
      "label": "Angular",
      "start_at": "2015-01-01T00:00:00Z",
      "end_at": null
    }
  ],
  "interests": [
    {
      "uuid": "c0701d93-4f1b-45f1-917d-1505c4148ae1",
      "label": "Travel",
      "start_at": "2012-01-01T00:00:00Z",
      "end_at": null
    }
  ]
}

```

## Libraries

This project showcases the following libraries:

* [Angular](https://github.com/angular/angular)
* [Angular CLI](https://github.com/angular/angular-cli)
* [NgRX Store](https://github.com/ngrx/platform/blob/master/docs/store/README.md)
* [NgRX Effects](https://github.com/ngrx/platform/blob/master/docs/effects/README.md)
* [RxJS](https://github.com/ReactiveX/rxjs)
