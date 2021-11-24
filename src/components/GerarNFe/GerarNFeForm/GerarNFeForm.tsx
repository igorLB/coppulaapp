import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import Input from '../../../shared/form/Input'
import Select from '../../../shared/form/Select'

type SelectOption = {
    key: string;
    value: string;
}

interface MyFormValues {
    searchCliente: string;
    codPrestador: string;
    codServico: string;
    valor: number;
}

function GerarNFeForm() {

    const requiredMessage = 'Este campo é obrigatório';

    const initialValues: MyFormValues = {
        searchCliente: '',
        codPrestador: '',
        codServico: '',
        valor: 0,
    }

    const validationSchema = Yup.object({
        searchCliente: Yup.string().required(requiredMessage),
        codPrestador: Yup.string().required(requiredMessage),
        codServico: Yup.string().required(requiredMessage),
        valor: Yup.number().moreThan(0, 'O Valor deve ser maior do que zero').required(requiredMessage),
    })

    const prestadores: SelectOption[] = [
        {key: 'Selecione o prestador', value: ''},
        {key: 'Igor', value: 'igor'},
        {key: 'João', value: 'joao'},
    ];

    const servicos: SelectOption[] = [
        {key: 'Selecione o Serviço', value: ''},
        {key: 'Serviços de TI', value: 'servicos_ti'},
    ];

    const onSubmit = (values: MyFormValues) => {
        alert("Faturado!");
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            validateOnMount={true}
            enableReinitialize
         >
            {
                formik => <Form className="p-4">
                    <h1>Tela de Venda/Gerar NFe</h1>
                    <Input name="searchCliente" type="text" placeholder="Buscar Cliente por CPF ou Código" className="form-control" />
                    <Select name="codPrestador" options={prestadores} className="form-control" />
                    <Select name="codServico" options={servicos} className="form-control" />
                    <Input name="valor" type="text" placeholder="Valor" className="form-control" />

                    <div className="w-100 mt-4 mb-4">
                        <div className="d-flex flex-column">
                            <button className="btn btn-dark">Faturar</button>
                        </div>
                    </div>
                </Form>
            }
        </Formik>
    )
}

export default GerarNFeForm
