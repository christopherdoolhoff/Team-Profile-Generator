const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("create new instance", () => {
    it("can create an engineer", () => {
      const engineerTest = new Engineer();
      expect(typeof engineerTest).toBe("object");
    });
  });

  describe("assign name of new instance", () => {
    it("can set engineer name", () => {
      const name = "Sam";
      const engineerNameTest = new Engineer(name);
      expect(engineerNameTest.name).toBe(name);
    });
  });

  describe("assign id of new instance", () => {
    it("can set engineer id", () => {
      const id = 4;
      const engineerIDTest = new Engineer("Sam", id);
      expect(engineerIDTest.id).toBe(id);
    });
  });

  describe("assign email of new instance", () => {
    it("can set engineer email", () => {
      const email = "test@gmail.com";
      const engineerEmailTest = new Engineer("Sam", 4, email);
      expect(engineerEmailTest.email).toBe(email);
    });
  });

  describe("assign github username of new instance", () => {
    it("can set github username", () => {
      const gitHub = "testGitHub";
      const engineerGitHubTest = new Engineer("Sam", 4, "test@gmail.com", gitHub);
      expect(engineerGitHubTest.gitHubUserName).toBe(gitHub);
    });
  });

  describe("call name of new instance with method", () => {
    it("can use getName() to get engineer name", () => {
      const name = "Sam";
      const engineerNameTest = new Engineer(name);
      expect(engineerNameTest.getName()).toBe(name);
    });
  });

  describe("call Id of new instance with method", () => {
    it("can use getId() to get engineer Id", () => {
      const id = 4;
      const engineerIDTest = new Engineer("Sam", id);
      expect(engineerIDTest.getId()).toBe(id);
    });
  });

  describe("call email of new instance with method", () => {
    it("can use getEmail() to get engineer Email", () => {
      const email = "test@gmail.com";
      const engineerEmailTest = new Engineer("Sam", 4, email);
      expect(engineerEmailTest.getEmail()).toBe(email);
    });
  });

  describe("call github username of new instance with method", () => {
    it("can use getGitHubUserName() to get engineer github username", () => {
      const gitHub = "testGitHub";
      const engineerGitHubTest = new Engineer("Sam", 4, "test@gmail.com", gitHub);
      expect(engineerGitHubTest.getGitHubUserName()).toBe(gitHub);
    });
  });

  describe("call role of new instance with method", () => {
    it("can use getRole() to get engineer Role", () => {
      const role = "Engineer";
      const engineerRoleTest = new Engineer("Sam", 4, "test@gmail.com");
      expect(engineerRoleTest.getRole()).toBe(role);
    });
  });
});
