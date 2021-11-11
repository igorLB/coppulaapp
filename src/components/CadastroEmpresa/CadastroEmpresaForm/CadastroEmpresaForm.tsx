import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import { Link } from 'react-router-dom'
import Input from '../../../shared/form/Input'
import Select from '../../../shared/form/Select'

type SelectOption = {
    key: string;
    value: string;
}

interface MyFormValues {
    codEmpresa: string;
    razaoSocial: string;
    cnpj: string;
    inscricaoEstadual: string;
    inscricaoMunicipal: string;
    email: string;
    cep: string;
    municipio: string;
    estado: string;
    endereco: string;
    pontoReferencia: string;
}

function CadastroEmpresaForm() {
    
    const requiredMessage = 'Este campo é obrigatório';

    const validationSchema = Yup.object({
        codEmpresa: Yup.string().required(requiredMessage),
        razaoSocial: Yup.string().required(requiredMessage),
        cnpj: Yup.string().required(requiredMessage),
        inscricaoEstadual: Yup.string().required(requiredMessage),
        inscricaoMunicipal: Yup.string().required(requiredMessage),
        email: Yup.string().email().required(requiredMessage),
        cep: Yup.string().required(requiredMessage),
        municipio: Yup.string().required(requiredMessage),
        estado: Yup.string().required(requiredMessage),
        endereco: Yup.string().required(requiredMessage),
        pontoReferencia: Yup.string(),
    })

    const estadoOptions: SelectOption[] = [
        {key: 'SP', value: 'SP'},
        {key: 'RJ', value: 'RJ'},
        {key: 'GO', value: 'GO'},
    ];

    const initialValues: MyFormValues = {
        codEmpresa: "",
        razaoSocial: "",
        cnpj: "",
        inscricaoEstadual: "",
        inscricaoMunicipal: "",
        email: "",
        cep: "",
        municipio: "",
        estado: '',
        endereco: "",
        pontoReferencia: "",
    }

    const [formValues, setFormValues] = React.useState<MyFormValues>(initialValues);

    React.useEffect(() => {
        const cadastroEmpresaStorage = localStorage.getItem("cadastroEmpresa");
        if (cadastroEmpresaStorage !== null) {
            setFormValues(JSON.parse(cadastroEmpresaStorage));
          }
    }, [])

    const onSubmit = (values: MyFormValues) => {
        localStorage.setItem('cadastroEmpresa', JSON.stringify(values));
        setFormValues(values);
        alert("Salvo!");
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
                    <h1>Cadastro da Empresa</h1>
                    <Input name="codEmpresa" type="text" placeholder="Código da Empresa" className="form-control" />
                    <Input name="razaoSocial" type="text" placeholder="Razão Social" className="form-control" />
                    <Input name="cnpj" type="text" placeholder="CNPJ" className="form-control" />
                    <Input name="inscricaoEstadual" type="text" placeholder="Inscrição Estadual" className="form-control" />
                    <Input name="inscricaoMunicipal" type="text" placeholder="Inscrição Municipal" className="form-control" />
                    <Input name="email" type="text" placeholder="E-mail" className="form-control" />
                    <Input name="cep" type="text" placeholder="CEP" className="form-control" />
                    <Input name="municipio" type="text" placeholder="Município" className="form-control" />
                    <Select name="estado" options={estadoOptions} placeholder="UF" className="form-control" /> 
                    <Input name="endereco" type="text" placeholder="Endereço" className="form-control" />
                    <Input name="pontoReferencia" type="text" placeholder="Ponto de Referência" className="form-control" />

                    <div className="w-100 text-center mt-4 mb-4">
                        <div className="">
                            <button type="submit" className="btn btn-dark">Salvar</button>
                            <Link to="/cadastro-cliente" className="btn btn-dark">Avançar</Link>
                            <button  type="button" onClick={() => setFormValues(initialValues)} className="btn btn-dark">Limpar</button>
                        </div>
                    </div>
                </Form>
            }
        </Formik>
    )
}

export default CadastroEmpresaForm
