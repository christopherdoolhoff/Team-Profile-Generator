const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("create new instance", () => {
    it("can create an employee", () => {
      const employeeTest = new Employee();
      expect(typeof employeeTest).toBe("object");
    });
  });

  describe("assign name of new instance", () => {
    it("can set employee name", () => {
      const name = "Sam";
      const employeeNameTest = new Employee(name);
      expect(employeeNameTest.name).toBe(name);
    });
  });

  describe("assign id of new instance", () => {
    it("can set employee id", () => {
      const id = 4;
      const employeeIDTest = new Employee("Sam", id);
      expect(employeeIDTest.id).toBe(id);
    });
  });

  describe("assign email of new instance", () => {
    it("can set employee email", () => {
      const email = "test@gmail.com";
      const employeeEmailTest = new Employee("Sam", 4, email);
      expect(employeeEmailTest.email).toBe(email);
    });
  });

  describe("call name of new instance with method", () => {
    it("can use getName() to get employee name", () => {
      const name = "Sam";
      const employeeNameTest = new Employee(name);
      expect(employeeNameTest.getName()).toBe(name);
    });
  });

  describe("call Id of new instance with method", () => {
    it("can use getId() to get employee Id", () => {
      const id = 4;
      const employeeIDTest = new Employee("Sam", id);
      expect(employeeIDTest.getId()).toBe(id);
    });
  });

  describe("call email of new instance with method", () => {
    it("can use getEmail() to get employee Email", () => {
      const email = "test@gmail.com";
      const employeeEmailTest = new Employee("Sam", 4, email);
      expect(employeeEmailTest.getEmail()).toBe(email);
    });
  });

  describe("call role of new instance with method", () => {
    it("can use getRole() to get employee Role", () => {
      const role = "employee";
      const employeeRoleTest = new Employee("Sam", 4, "test@gmail.com");
      expect(employeeRoleTest.getRole()).toBe(role);
    });
  });
});
