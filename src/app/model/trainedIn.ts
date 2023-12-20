// trained-in.model.ts

import { Physician } from "./physician";
import { Procedure } from "./procedure";

export interface TrainedIn {
    physician: number;
    treatment: number;
    certificationdate: Date;
    certificationexpires: Date;
    procedure?: Procedure; // Assuming Procedure model is defined
    physician2?: Physician; // Assuming Physician model is defined
  }
  