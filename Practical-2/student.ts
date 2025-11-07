// student.ts

export class Student {
  name: string;
  rollNo: number;
  marks: number[];

  constructor(name: string, rollNo: number, marks: number[]) {
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks;
  }

  // Method to calculate average marks
  getAverage(): number {
    const total = this.marks.reduce((sum, mark) => sum + mark, 0);
    return total / this.marks.length;
  }

  // Method to display student details
  displayInfo(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Roll No: ${this.rollNo}`);
    console.log(`Average Marks: ${this.getAverage().toFixed(2)}`);
    console.log("---------------------------");
  }
}
