import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import LoadingIframe from "react-loading-iframe";
import Loading from "./Loading";

export default function ComponentsModal({ data }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className="text-blue-500 underline bg-white mt-4 p-0"
        onPress={onOpen}
      >
        Read More
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="full">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {data.title}
              </ModalHeader>
              <ModalBody>
                {/* <iframe
                  src={data.link}
                  frameborder="0"
                  className="h-screen"
                ></iframe> */}
                <LoadingIframe
                  skeleton={<Loading />}
                  src={data.link}
                  className="h-screen"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
