class Employee {
    empid?: number | string;
    empname: string;
    empdesignation: string;
    empsalary: number;
    empproject: string;
  
    public constructor(empid: number | string,empname: string, empdesignation: string, empsalary: number, empproject: string) {
  
        this.empid = empid;
        this.empname = empname;
        this.empdesignation = empdesignation;
        this.empsalary = empsalary;
        this.empproject = empproject;

    }
   getempdetail() {
    console.log("empid="+this.empid+"emp name:"+this.empname+"emp designation:"+this.empdesignation+"emp salary:"+this.empsalary+"emp project:"+this.empproject);
    }  
  }
  let emp = new Employee(1200,"karthikeyan","developer",25000,"java");
  emp.getempdetail();
  
  