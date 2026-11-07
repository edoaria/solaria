let isDevMode = false;
let isRegistrationOpen = true;

function toggleDevModal() {
    const modal = document.getElementById('dev-modal');
    if (modal) modal.classList.toggle('hidden');
}

function verifyDevPassword() {
    const inputPw = document.getElementById('dev-password-input').value;
    if (inputPw === 'PRIMOFIVE2112') {
        isDevMode = true;
        const btnText = document.getElementById('dev-btn-text');
        if (btnText) btnText.innerText = 'Dev Active';
        
        const devForm = document.getElementById('dev-update-form');
        if (devForm) devForm.classList.remove('hidden');
        
        document.querySelectorAll('.dev-delete-btn').forEach(btn => btn.classList.remove('hidden'));
        toggleDevModal();
        alert('Developer Mode Berhasil Diaktifkan!');
    } else {
        alert('Password Developer Salah!');
    }
}

function handleRegistration(e) {
    e.preventDefault();
    alert('Form Pendaftaran Berhasil Terkirim!');
    e.target.reset();
}

function addUpdateItem() {
    const titleInput = document.getElementById('new-update-title');
    const descInput = document.getElementById('new-update-desc');
    if (!titleInput || !descInput) return;

    const title = titleInput.value.trim();
    const desc = descInput.value.trim();
    if (!title || !desc) {
        alert('Isi judul & deskripsi update!');
        return;
    }

    const container = document.getElementById('update-list-container');
    const itemId = 'update-' + Date.now();
    const newItemHTML = `
        <div class="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm hover-wobble flex justify-between items-center" id="${itemId}">
            <div>
                <span class="text-xs font-bold text-[#00a6ff] bg-sky-50 px-3 py-1 rounded-xl">Patch Update</span>
                <h4 class="font-extrabold text-slate-900 text-lg mt-2">${title}</h4>
                <p class="text-sm text-slate-500 mt-1">${desc}</p>
            </div>
            <button onclick="deleteUpdateItem('${itemId}')" class="dev-delete-btn p-3 bg-red-50 text-red-500 rounded-2xl hover:bg-red-100 transition-colors">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
    `;

    container.insertAdjacentHTML('afterbegin', newItemHTML);
    titleInput.value = '';
    descInput.value = '';
}

function deleteUpdateItem(id) {
    if (confirm('Hapus info update ini?')) {
        const item = document.getElementById(id);
        if (item) item.remove();
    }
}

function handleSendChat(e) {
    e.preventDefault();
    const sender = document.getElementById('chat-sender').value.trim();
    const message = document.getElementById('chat-message').value.trim();
    if (!sender || !message) return;

    const chatBox = document.getElementById('chat-box');
    const chatElement = document.createElement('div');
    chatElement.className = 'bg-slate-50 border border-slate-200/80 p-4 rounded-2xl text-sm space-y-1';
    chatElement.innerHTML = `<span class="font-bold text-[#00a6ff]">${sender}</span><p class="text-slate-600">${message}</p>`;

    chatBox.appendChild(chatElement);
    chatBox.scrollTop = chatBox.scrollHeight;
    document.getElementById('chat-message').value = '';
}
