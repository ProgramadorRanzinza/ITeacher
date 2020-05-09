import { AddAccountTeacherModel } from '../../models/account-teacher/add-account-teacher-model'

export type AddAccountTeacherParams = Omit<AddAccountTeacherModel, 'id'>

export interface AddAccountTeacher {
  add (account: AddAccountTeacherParams): Promise<boolean>
}