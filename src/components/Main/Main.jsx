import React, { useState } from "react";
import { SimpleModal } from "../SimpleModal/SimpleModal";
import "./Main.css";

export const Main = () => {
  const [modalInfoIsOpen, setModalInfoOpen] = useState(false);
  const [modalAboutIsOpen, setModalAboutOpen] = useState(false);
  const [modalDataIsOpen, setModalDataOpen] = useState(false);

  return (
    <main className="main">
      <section className="section">
        <button
          className="modal-show-button"
          onClick={() => setModalInfoOpen(true)}
        >
          Modal Info
        </button>
        <button
          className="modal-show-button"
          onClick={() => setModalAboutOpen(true)}
        >
          Modal About
        </button>
        <button
          className="modal-show-button"
          onClick={() => setModalDataOpen(true)}
        >
          Modal Data
        </button>

        <SimpleModal
          isOpen={modalInfoIsOpen}
          onClose={() => setModalInfoOpen(false)}
        >
          <>
            <h2>Modal Info</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nisi
              esse soluta eos eum maiores delectus officia recusandae fugiat
              suscipit hic, nostrum aspernatur? Reprehenderit, illo?
            </p>
          </>
        </SimpleModal>

        <SimpleModal
          isOpen={modalAboutIsOpen}
          onClose={() => setModalAboutOpen(false)}
        >
          <>
            <h2>Modal About</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
              mollitia fuga. Libero dolor totam labore?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, quasi voluptatibus? Eum itaque nemo distinctio
              laudantium dolores.
            </p>
          </>
        </SimpleModal>

        <SimpleModal
          isOpen={modalDataIsOpen}
          onClose={() => setModalDataOpen(false)}
        >
          <>
            <h2>Modal About</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
              saepe dolores dolorum fugiat facere alias ipsa odio cumque, velit
              nesciunt corrupti natus? Architecto vitae praesentium, iste
              tempora quos repellat assumenda quibusdam rem fugiat est veniam
              culpa ad corrupti neque odit itaque enim porro, quaerat maxime
              quod et beatae nostrum! Nesciunt.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates tenetur itaque voluptatem nostrum ad perspiciatis in
              natus, beatae aperiam, nisi autem! Eum aspernatur dolores dolorem
              deserunt, cupiditate recusandae voluptates dignissimos mollitia.
              Quibusdam adipisci repellendus minima autem dolorum ut hic
              blanditiis doloribus architecto ipsum, sit aliquid ipsam
              voluptatibus excepturi corrupti similique.
            </p>
          </>
        </SimpleModal>
      </section>
    </main>
  );
};
