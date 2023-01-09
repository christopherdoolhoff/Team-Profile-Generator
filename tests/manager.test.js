const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("create new instance", () => {
    it("can create an manager", () => {
      const managerTest = new Manager();
      expect(typeof managerTest).toBe("object");
    });
  });

  describe("assign name of new instance", () => {
    it("can set manager name", () => {
      const name = "Sam";
      const managerNameTest = new Manager(name);
      expect(managerNameTest.name).toBe(name);
    });
  });

  describe("assign id of new instance", () => {
    it("can set manager id", () => {
      const id = 4;
      const managerIDTest = new Manager("Sam", id);
      expect(managerIDTest.id).toBe(id);
    });
  });

  describe("assign email of new instance", () => {
    it("can set manager email", () => {
      const email = "test@gmail.com";
      const managerEmailTest = new Manager("Sam", 4, email);
      expect(managerEmailTest.email).toBe(email);
    });
  });

  describe("assign office number of new instance", () => {
    it("can set office number", () => {
      const officeNumber = 45645;
      const managerOfficeNumberTest = new Manager("Sam", 4, "test@gmail.com", officeNumber);
      expect(managerOfficeNumberTest.officeNumber).toBe(officeNumber);
    });
  });

  describe("call name of new instance with method", () => {
    it("can use getName() to get manager name", () => {
      const name = "Sam";
      const managerNameTest = new Manager(name);
      expect(managerNameTest.getName()).toBe(name);
    });
  });

  describe("call Id of new instance with method", () => {
    it("can use getId() to get manager Id", () => {
      const id = 4;
      const managerIDTest = new Manager("Sam", id);
      expect(managerIDTest.getId()).toBe(id);
    });
  });

  describe("call email of new instance with method", () => {
    it("can use getEmail() to get manager Email", () => {
      const email = "test@gmail.com";
      const managerEmailTest = new Manager("Sam", 4, email);
      expect(managerEmailTest.getEmail()).toBe(email);
    });
  });

  describe("call office number of new instance with method", () => {
    it("can use getOfficeNumber() to get manager office number", () => {
        const officeNumber = 45645;
        const managerOfficeNumberTest = new Manager("Sam", 4, "test@gmail.com", officeNumber);
      expect(managerOfficeNumberTest.getOfficeNumber()).toBe(officeNumber);
    });
  });

  describe("call role of new instance with method", () => {
    it("can use getRole() to get manager Role", () => {
      const role = "Manager";
      const managerRoleTest = new Manager("Sam", 4, "test@gmail.com");
      expect(managerRoleTest.getRole()).toBe(role);
    });
  });
});
