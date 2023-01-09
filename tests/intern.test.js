const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("create new instance", () => {
    it("can create an Intern", () => {
      const internTest = new Intern();
      expect(typeof internTest).toBe("object");
    });
  });

  describe("assign name of new instance", () => {
    it("can set intern name", () => {
      const name = "Sam";
      const internNameTest = new Intern(name);
      expect(internNameTest.name).toBe(name);
    });
  });

  describe("assign id of new instance", () => {
    it("can set intern id", () => {
      const id = 4;
      const internIDTest = new Intern("Sam", id);
      expect(internIDTest.id).toBe(id);
    });
  });

  describe("assign email of new instance", () => {
    it("can set intern email", () => {
      const email = "test@gmail.com";
      const internEmailTest = new Intern("Sam", 4, email);
      expect(internEmailTest.email).toBe(email);
    });
  });

  describe("assign school of new instance", () => {
    it("can set school", () => {
      const school = "Weber State University";
      const internSchoolTest = new Intern("Sam", 4, "test@gmail.com", school);
      expect(internSchoolTest.school).toBe(school);
    });
  });

  describe("call name of new instance with method", () => {
    it("can use getName() to get intern name", () => {
      const name = "Sam";
      const internNameTest = new Intern(name);
      expect(internNameTest.getName()).toBe(name);
    });
  });

  describe("call Id of new instance with method", () => {
    it("can use getId() to get intern Id", () => {
      const id = 4;
      const internIDTest = new Intern("Sam", id);
      expect(internIDTest.getId()).toBe(id);
    });
  });

  describe("call email of new instance with method", () => {
    it("can use getEmail() to get intern Email", () => {
      const email = "test@gmail.com";
      const internEmailTest = new Intern("Sam", 4, email);
      expect(internEmailTest.getEmail()).toBe(email);
    });
  });

  describe("call github username of new instance with method", () => {
    it("can use getSchool() to get intern school", () => {
      const school = "Weber State University";
      const internSchoolTest = new Intern("Sam", 4, "test@gmail.com", school);
      expect(internSchoolTest.getSchool()).toBe(school);
    });
  });

  describe("call role of new instance with method", () => {
    it("can use getRole() to get intern Role", () => {
      const role = "Intern";
      const internRoleTest = new Intern("Sam", 4, "test@gmail.com");
      expect(internRoleTest.getRole()).toBe(role);
    });
  });
});
