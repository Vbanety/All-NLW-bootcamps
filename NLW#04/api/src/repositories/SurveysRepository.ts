

import { EntityRepository, Repository } from "typeorm";
import { Survey } from "../models/Servey";


@EntityRepository(Survey)
class SurveysRepository extends Repository<Survey> {}

export { SurveysRepository };