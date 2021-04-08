import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Input, Message } from "semantic-ui-react";
import { useForm, Controller } from "react-hook-form";

export const UpDateItem = ({ data, updateitem }) => {
  const [visible, setVisible] = useState(false);
  const visibleToggle = () => setVisible(!visible);
  const { handleSubmit, control, errors } = useForm();
  const onSubmit = (data) => {
    updateitem(data);
    visibleToggle();
  };
  useEffect(() => {}, [errors]);
  return (
    <Modal
      trigger={<Button icon="edit" onClick={visibleToggle} />}
      open={visible}
      onClose={visibleToggle}
    >
      <Modal.Header>Actualizar</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Controller name="id" defaultValue={data.id} control={control} />
          <Form.Field>
            <label>web</label>
            <Controller
              as={<Input />}
              name="web"
              defaultValue={data.web}
              control={control}
              rules={{
                required: true,
              }}
            />
            {errors.web ? (
              <Message negative>
                <Message.Header>Este campo es necesario</Message.Header>
              </Message>
            ) : null}
          </Form.Field>
          <Form.Field>
            <label>usuario</label>
            <Controller
              as={<Input />}
              name="user"
              defaultValue={data.user}
              control={control}
              rules={{
                required: true,
              }}
            />
            {errors.user ? (
              <Message negative>
                <Message.Header>Este campo es necesario</Message.Header>
              </Message>
            ) : null}
          </Form.Field>
          <Form.Field>
            <label>contraseña</label>
            <Controller
              as={<Input />}
              name="pass"
              defaultValue={data.pass}
              control={control}
              rules={{
                required: true,
              }}
            />
            {errors.pass ? (
              <Message negative>
                <Message.Header>Este campo es necesario</Message.Header>
              </Message>
            ) : null}
          </Form.Field>
          <Button type="submit" color="green">
            guardar
          </Button>
          <Button type="button" onClick={visibleToggle}>
            Cerrar
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};
