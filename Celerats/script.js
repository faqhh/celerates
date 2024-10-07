// Menangani pengiriman form
registrationForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    // Mendapatkan nilai dari input
    const firstName = document.querySelector('input[placeholder="Masukan nama awal"]').value;
    const lastName = document.querySelector('input[placeholder="Masukan nama akhir"]').value;
    const email = document.querySelector('input[placeholder="Masukan email anda"]').value;
    const pass = password.value;
    const confirmPass = confirmPassword.value;
    const termsChecked = document.getElementById('terms').checked;

    // Validasi form
    if (!firstName || !lastName || !email || !pass || !confirmPass) {
        alert('Semua kolom harus diisi!');
        return;
    }

    if (pass !== confirmPass) {
        alert('Kata sandi dan konfirmasi kata sandi tidak cocok!');
        return;
    }

    if (!termsChecked) {
        alert('Anda harus setuju dengan syarat & ketentuan!');
        return;
    }

    // Menyimpan data pengguna ke localStorage
    const user = {
        firstName,
        lastName,
        email,
        password: pass // Pastikan menyimpan kata sandi dengan aman
    };

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    storedUsers.push(user);
    localStorage.setItem('users', JSON.stringify(storedUsers));

    // Melakukan pengalihan ke halaman login.html setelah form diisi dengan benar
    window.location.href = "login.html";
});
