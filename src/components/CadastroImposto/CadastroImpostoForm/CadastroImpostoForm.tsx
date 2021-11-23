import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import Input from '../../../shared/form/Input'

interface MyFormValues {
    codImposto: string;
    pis: number;
    iss: number;
    csl: number;
    ir: number;
    cofins: number;
}

function CadastroImpostoForm() {
    const navigate = useNavigate();

    const initialValues: MyFormValues = {
        codImposto: '',
        pis: 0,
        iss: 0,
        csl: 0,
        ir: 0,
        cofins: 0,
    }

    const requiredMessage = 'Este campo é obrigatório'
    const validationSchema = Yup.object({
        codImposto: Yup.string().required(requiredMessage),
        pis: Yup.number(),
        iss: Yup.number(),
        csl: Yup.number(),
        ir: Yup.number(),
        cofins: Yup.number(),
    })

    const [formValues, setFormValues] = React.useState<MyFormValues>(initialValues);

    React.useEffect(() => {
        const cadastroImpostosStorage = localStorage.getItem("cadastroImpostos");
        if (cadastroImpostosStorage !== null) {
            setFormValues(JSON.parse(cadastroImpostosStorage));
          }
    }, [])
    const onSubmit = (values: MyFormValues) => {
        localStorage.setItem('cadastroImpostos', JSON.stringify(values));
        setFormValues(values);
        alert("Cadastro Realizado com sucesso!");
        navigate('/')
    }

    return (
        <Formik
            initialValues={formValues || initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnMount={true}
            enableReinitialize
         >
            {
                formik => <Form className="p-4">
                    <h1>Cadastro de Impostos</h1>
                    <Input name="codImposto" type="text" placeholder="Código de Serviço" className="form-control" />
                    <Input name="pis" type="text" placeholder="PIS %" className="form-control" />
                    <Input name="iss" type="text" placeholder="ISS %" className="form-control" />
                    <Input name="cls" type="text" placeholder="CLS %" className="form-control" />
                    <Input name="ir" type="text" placeholder="IR %" className="form-control" />
                    <Input name="cofins" type="text" placeholder="COFINS %" className="form-control" />

                    <div className="w-100 mt-4 mb-4 ">
                        <div className="d-flex justify-content-around">
                            <button type="submit" className="btn btn-dark">Finalizar</button>
                            <button  type="button" onClick={() => setFormValues(initialValues)} className="btn btn-dark">Limpar</button>
                        </div>
                    </div>
                </Form>
            }
        </Formik>
    )
}

export default CadastroImpostoForm
