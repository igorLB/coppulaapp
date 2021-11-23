import { Form, Formik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../../shared/form/Input'

interface MyFormValues {
    codServico: string;
    nome: string;
    cnae: string;
    codImposto ?: number;
}

function CadastroServicoForm() {

    const initialValues: MyFormValues = {
        codServico: '',
        nome: '',
        cnae: '',
        codImposto: undefined,
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(param) => console.log(param)}
         >
            {
                formik => <Form className="p-4">
                    <h1>Cadastro do Serviço</h1>
                    <Input name="codServico" type="text" placeholder="Código" className="form-control" />
                    <Input name="nome" type="text" placeholder="Nome do Serviço" className="form-control" />
                    <Input name="cnae" type="text" placeholder="CNAE" className="form-control" />
                    <Input name="codImposto" type="text" placeholder="Código do Imposto" className="form-control" />

                    <div className="w-100 mt-4 mb-4">
                        <div className="d-flex justify-content-around">
                            <button className="btn btn-dark">Salvar</button>
                            <button className="btn btn-dark">Limpar</button>
                            <button className="btn btn-dark">Excluir</button>
                        </div>
                    </div>
                </Form>
            }
        </Formik>
    )
}

export default CadastroServicoForm
