import uuid from 'uuid';
import DBManager from '../managers/DBManager';

const studentSchema = {
   id: {
      type: String,
      hashKey: true
   },
   firtName: String,
   lastName: String,
   major: String,
   semester: Number,
   createdAt: String,
   updatedeAt: String
};

export default class Student extends DBManager{
   id;
   firstName;
   lastName;
   major;
   semester;
   createdAt;
   updatedeAt;

   constructor(
      id, firstName, lastName, major, semester, createdAt, updatedeAt
   ){
      super(process.env.STUDENT_TABLE_NAME, studentSchema)


      this.id= id;
      this.firstName= firstName;
      this.lastName= lastName;
      this.major= major;
      this.semester= semester;
      this.createdAt= createdAt;
      this.updatedeAt= updatedeAt;
   }

   toDBFormat(){
      return{
      ...this, 
      updatedeAt: this.updatedeAt.ToString(),
      createdAt: this.createdAt.ToString()
      };
   }

   getKey(){
      returnthis.id;
   }

   fromDBResponse(item){
      const{
         id,
         firstName,
         lastName,
         major,
         semester,
         createdAt,
         updatedeAt
      } = item;

      return new Student(id, firstName, lastName, major, semester, createdAt, updatedeAt);
   }

    static newStudent(firstName, lastName, major, semester){
       const id = uuid();
       return new Student(
          id, 
          firstName,
          lastName,
          major,
          semester,
          new Date(),
          new Date()
       );
    }
}