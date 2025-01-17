window.addEventListener('DOMContentLoaded', (event) => {
  const templateModal = `
    <div class="vtmn-modal" id="vtmn-modal">
      <div class="vtmn-modal_content">
        <div class="vtmn-modal_content_title">
          <p class="vtmn-modal_content_title--text">
            What is a modal?
          </p>
          <button id="btn-close-modal-1">
            <span class="vtmx-close-line"></span>
          </button>
        </div>
        <div class="vtmn-modal_content_body">
          <p class="vtmn-modal_content_body--text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
            assumenda? Asperiores rem nulla odit saepe dolores molestias
            exercitationem accusamus perferendis est aut repudiandae optio vel dicta
            reprehenderit ad, repellendus officiis cumque omnis labore in quia?
          </p>
        <div class="vtmn-modal_content_body--overflow-indicator"></div>
      </div>
      <div class="vtmn-modal_content_actions">
        <button id="btn-close-modal-2" class="vtmn-btn vtmn-btn_variant--secondary">
          Got Back
        </button>
        <button id="btn-close-modal-3" class="vtmn-btn vtmn-btn_variant--primary">
          Yes, I understand
        </button>
      </div>
    </div>
  </div>`;

  function createModal() {
    //Create the block div container
    let newDiv = document.createElement('div');
    newDiv.classList.add('block');
    document.body.appendChild(newDiv);
    instanciateModal();
  }

  function instanciateModal() {
    document.body.lastChild.innerHTML = templateModal;
    document.getElementById(`vtmn-modal`).classList.add('show');

    document
      .getElementById(`btn-close-modal-1`)
      .addEventListener('click', function () {
        document.getElementById(`vtmn-modal`).remove();
        document.getElementById('btn-modal').disabled = false;
      });

    document
      .getElementById(`btn-close-modal-2`)
      .addEventListener('click', function () {
        document.getElementById(`vtmn-modal`).remove();
        document.getElementById('btn-modal').disabled = false;
      });

    document
      .getElementById(`btn-close-modal-3`)
      .addEventListener('click', function () {
        document.getElementById(`vtmn-modal`).remove();
        document.getElementById('btn-modal').disabled = false;
      });
  }

  document.getElementById('btn-modal').addEventListener('click', function () {
    if (!document.getElementById('vtmn-modal')) {
      document.getElementById('btn-modal').disabled = true;
      createModal();
    }
  });
});
