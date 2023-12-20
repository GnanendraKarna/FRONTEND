

export interface Procedure {
    code : number;
    name : string;
    cost : number;
    listofTrainedIn?: TrainedIn[];
  }
  
  export interface TrainedIn {
    physician: number;
    treatment: number;
    certificationdate: Date;
    certificationexpires: Date;
  }
  
  