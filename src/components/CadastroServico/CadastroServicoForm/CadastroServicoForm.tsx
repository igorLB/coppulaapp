import { Form, Formik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'



interface MyFormValues {

}

function CadastroServicoForm() {

    const initialValues: MyFormValues = {

    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(param) => console.log(param)}
         >
            {
                formik => <Form className="p-4">
                    <h1>Cadastro de Serviços</h1>

                    <div className="w-100 text-center mt-4 mb-4">
                        <div className="">
                            <button className="btn btn-dark">Salvar</button>
                            <Link to="/gerar-nfe" className="btn btn-dark">Gerar NF-e</Link>
                            <button className="btn btn-dark">Limpar</button>
                        </div>
                    </div>
                </Form>
            }
        </Formik>
    )
}

export default CadastroServicoForm
