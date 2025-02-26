import React, { useRef, useMemo, memo, forwardRef, useCallback, useState, useImperativeHandle, useEffect } from 'react';
import { Modal, Form } from 'antd';
import type { ModalProps } from 'antd';
import { createPortal, render, unmountComponentAtNode } from 'react-dom';

export const MyModal = memo(forwardRef((props: any, ref) => {
  useEffect(() => {
    console.log('modal had mounted')
  }, [])
  const [form] = Form.useForm();
  const [modalChildren, setModalChildren] = useState<React.ReactElement | null>(null);
  const [modalProps, setModalProps] = useState<ModalProps>({
    visible: false,
    ...(props ?? {})
  });
  const typeRef = useRef<string>();

  const onFinish = useCallback((values: any) => {
    modalProps.onOk?.(values);
  }, [form, modalProps]);

  const onClose = useCallback(() => {
    if (typeRef.current === 'form') {
      form.resetFields();
    }
    setModalProps((source) => ({
      ...source,
      visible: false,
    }));
  }, [form]);

  const onOpen = useCallback(() => {
    setModalProps((source) => ({
      ...source,
      visible: true,
    }));
  }, [form]);

  useImperativeHandle(ref, () => ({
    injectChildren: (element) => {
      setModalChildren(element);
    },
    injectModalProps: (props) => {
      console.log(props)
      setModalProps((source) => {
        return {
          ...source,
          ...props,
        }
      });
    },
    open: () => {
      onOpen();
    },
    close: () => {
      onClose();
    },
    setFieldsValue: (values: any) => {
      form.setFieldsValue?.(values);
    },
    setType: (type: string) => {
      typeRef.current = type;
    }
  }), []);

  const handleOk = useCallback((e: any) => {
    if (typeRef.current === 'form') {
      form.submit();
    } else {
      modalProps.onOk?.(e);
    }
  }, [form, modalProps]);

  return (
    <Modal
      {...modalProps}
      onCancel={onClose}
      onOk={handleOk}
    >
      {
        modalChildren
          ? React.cloneElement(modalChildren, typeRef.current === 'form'
            ? {
                onFinish,
                form,
                onClose,
              }
            : { onClose })
          : null
      }
    </Modal>
  )
}));

interface modalRefType {
  open: () => void;
  close: () => void;
  injectChildren: (child: React.ReactElement) => void;
  injectModalProps: (props: ModalProps) => void;
  setFieldsValue: (values: any) => void;
  setType: (type: string) => void;
}

interface openArgType extends ModalProps {
  children?: React.ReactElement,
  type?: 'form' | 'default',
  initialValues?: {
    [key: string]: any;
  },
}

const useMyModal = () => {
  const modalRef = useRef<modalRefType>();
  const handle = useMemo(() => {
    return {
      open: ({ children, type, initialValues, ...rest }: openArgType) => {
        console.log('modalRef.current: ', modalRef.current);
        modalRef.current?.setType(type ?? '');
        modalRef.current?.injectChildren(children ?? <div>111</div>);
        modalRef.current?.injectModalProps(rest);
        modalRef.current?.open();
        if (initialValues && type === 'form') {
          modalRef.current?.setFieldsValue?.(initialValues);
        }
      },
      close: () => {
        modalRef.current?.close();
      }
    };
  }, []);

  const containerRef = useRef<any>(document.createDocumentFragment())
  useEffect(() => {
    render(createPortal(<MyModal key="my-modal" ref={modalRef} />, document.body) as any, containerRef.current)

    return () => {
      unmountComponentAtNode(containerRef.current)
    }
  }, [])

  return [handle] as const;
}

export default useMyModal
