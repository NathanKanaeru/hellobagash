// Password Generator
function generatePassword() {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById("passwordResult").textContent = password;
}

// QR Code Generator
// QR Code Generator
function generateQRCode() {
    const qrInput = document.getElementById("qrInput").value;
    const qrResult = document.getElementById("qrResult");
    qrResult.innerHTML = ""; // Clear previous QR Code

    if (qrInput.trim() === "") {
        qrResult.textContent = "Please enter text to generate QR code.";
        return;
    }

    const qrcode = new QRCode(qrResult, {
        text: qrInput,
        width: 128,
        height: 128
    });
}

// Text to Binary
function convertToBinary() {
    const text = document.getElementById("textInput").value;
    let binary = "";
    for (let i = 0; i < text.length; i++) {
        binary += text[i].charCodeAt(0).toString(2) + " ";
    }
    document.getElementById("binaryResult").textContent = binary.trim();
}

// Kalkulator
function calculate() {
    const expression = document.getElementById("calcInput").value;
    try {
        const result = eval(expression);
        document.getElementById("calcResult").textContent = result;
    } catch (error) {
        document.getElementById("calcResult").textContent = "Invalid expression!";
    }
}

// Subnet Calculator
function calculateSubnet() {
    const input = document.getElementById("ipAddress").value;
    const [ip, cidr] = input.split('/');
    const cidrInt = parseInt(cidr);

    if (!validateIP(ip) || isNaN(cidrInt) || cidrInt < 0 || cidrInt > 32) {
        document.getElementById("subnetResult").textContent = "Invalid IP Address or CIDR!";
        return;
    }

    const subnetMaskBinary = (0xFFFFFFFF << (32 - cidrInt)) >>> 0;
    const subnetMask = binaryToIp(subnetMaskBinary);
    const ipBinary = ipToBinary(ip);
    const networkAddressBinary = ipBinary & subnetMaskBinary;
    const networkAddress = binaryToIp(networkAddressBinary);
    const broadcastAddressBinary = networkAddressBinary | (~subnetMaskBinary >>> 0);
    const broadcastAddress = binaryToIp(broadcastAddressBinary);
    const totalHosts = Math.pow(2, (32 - cidrInt)) - 2;
    const numberOfSubnets = Math.pow(2, cidrInt - calculateBaseCIDR(ip));

    document.getElementById("subnetResult").innerHTML = `
        <strong>IP Address:</strong> ${ip}/${cidr}<br>
        <strong>Subnet Mask:</strong> ${subnetMask}<br>
        <strong>Network Address:</strong> ${networkAddress}<br>
        <strong>Broadcast Address:</strong> ${broadcastAddress}<br>
        <strong>Total Hosts:</strong> ${totalHosts}<br>
        <strong>Number of Subnets:</strong> ${numberOfSubnets}
    `;
}

function validateIP(ip) {
    const parts = ip.split('.');
    return parts.length === 4 && parts.every(part => {
        const num = parseInt(part);
        return num >= 0 && num <= 255;
    });
}

function ipToBinary(ip) {
    return ip.split('.').map(part => parseInt(part).toString(2).padStart(8, '0')).join('');
}

function binaryToIp(binary) {
    return [
        (binary >>> 24) & 0xFF,
        (binary >>> 16) & 0xFF,
        (binary >>> 8) & 0xFF,
        binary & 0xFF
    ].join('.');
}

function calculateBaseCIDR(ip) {
    const firstOctet = parseInt(ip.split('.')[0]);
    if (firstOctet >= 0 && firstOctet <= 127) return 8;
    if (firstOctet >= 128 && firstOctet <= 191) return 16;
    if (firstOctet >= 192 && firstOctet <= 223) return 24;
    return 0;
}


// Temperature Converter
function convertTemperature() {
    const tempInput = document.getElementById("tempInput").value;
    const tempUnit = document.getElementById("tempUnit").value;
    let result = "";

    if (tempUnit === "C") {
        result = (tempInput * 9/5) + 32 + " °F";
    } else if (tempUnit === "F") {
        result = (tempInput - 32) * 5/9 + " °C";
    }

    document.getElementById("tempResult").textContent = `Converted Temperature: ${result}`;
}
// Script untuk fungsi tambahan, seperti interaksi menu mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-btn');
    const dialogMenu = document.getElementById('dialog-menu');
    const closeDialog = document.getElementById('close-dialog');

    menuButton.addEventListener('click', function() {
        dialogMenu.classList.remove('hidden');
    });

    closeDialog.addEventListener('click', function() {
        dialogMenu.classList.add('hidden');
    });

    // Optional: Close dialog when clicking outside of it
    dialogMenu.addEventListener('click', function(event) {
        if (event.target === dialogMenu) {
            dialogMenu.classList.add('hidden');
        }
    });
});
