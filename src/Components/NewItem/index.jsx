import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Input, Message } from "semantic-ui-react";
import { useForm, Controller } from "react-hook-form";

export const NewItem = ({ newregister }) => {
  const [visible, setVisible] = useState(false);
  const visibleToggle = () => setVisible(!visible);

  const { handleSubmit, control, errors } = useForm();

  const submitForm = (data) => {
    newregister(data);
    visibleToggle();
  };
  useEffect(() => {}, [errors]);
  return (
    <Modal
      trigger={
        <Button
          circular
          color="green"
          icon="plus"
          size="massive"
          onClick={visibleToggle}
        />
      }
      open={visible}
      onClose={visibleToggle}
    >
      <Modal.Header>Añadir</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit(submitForm)}>
          <Form.Field>
            <label>web</label>
            <Controller
              as={<Input />}
              name="web"
              control={control}
              defaultValue=""
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
              control={control}
              defaultValue=""
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
              control={control}
              defaultValue=""
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
