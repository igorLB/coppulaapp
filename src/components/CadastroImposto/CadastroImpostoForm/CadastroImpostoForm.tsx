import { Form, Formik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'

type SelectOption = {
    key: string;
    value: string;
}

interface MyFormValues {

}

function CadastroImpostoForm() {

    const estadoOptions: SelectOption[] = [
        {key: 'SP', value: 'SP'},
        {key: 'RJ', value: 'RJ'},
        {key: 'GO', value: 'GO'},
    ];

    const initialValues: MyFormValues = {

    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(param) => console.log(param)}
         >
            {
                formik => <Form className="p-4">
                    <h1>Cadastro de Impostos</h1>

                    <div className="w-100 text-center mt-4 mb-4">
                        <div className="">
                            <button className="btn btn-dark">Salvar</button>
                            <Link to="/cadastro-servico" className="btn btn-dark">Avançar</Link>
                            <button className="btn btn-dark">Limpar</button>
                        </div>
                    </div>
                </Form>
            }
        </Formik>
    )
}

export default CadastroImpostoForm
