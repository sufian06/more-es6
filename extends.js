class TeamMember {
  name;
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  provideFeedback() {
    console.log(`${this.name} thank you for your feedback`);
  }
}

class Instructor extends TeamMember {
  designation = "Web Course Instructor";
  team = "web team";
  constructor(name, location) {
    super(name, location);
  }

  startSupportSession(time) {
    console.log(`start the support session at ${time}`);
  }
  createQuiz(module) {
    console.log(`please create quiz for module ${module}`);
  }
}

class Developer extends TeamMember {
  designation = "Web Developer";
  team = "web team";
  tech;

  constructor(name, location, tech) {
    super(name, location);
    this.tech = tech;
  }
  developFeature(feature) {
    console.log(`Please develop the ${feature}`);
  }
  release(version) {
    console.log(`please release the version ${version}`);
  }
}

class JobPlacementn extends TeamMember {
  designation = "Job Placement Commandos";
  team = "Job Placement";
  region;

  constructor(name, location, region) {
    super(name, location);
    this.region = region;
  }
  provideResume(resume) {
    console.log(`Please develop the ${resume}`);
  }
  prepareStudent(version) {
    console.log(`please release the version ${version}`);
  }
}

const alia = new Developer('Alia Bhatt', 'Dhaka', 'React');
console.log(alia);
alia.provideFeedback()
alia.developFeature('react native');
alia.release(5.0)

const bipasha = new JobPlacementn('Bipasha Bashu', 'Kolkata', 'India');
console.log(bipasha);