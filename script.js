const dnaWeights = {
    'A': 331.2,
    'T': 322.2,
    'G': 347.2,
    'C': 307.2
};

const rnaWeights = {
    'A': 347.2,
    'U': 324.2,
    'G': 363.2,
    'C': 323.2
};

const proteinWeights = {
    'A': 89.1,  'R': 174.2, 'N': 132.1, 'D': 133.1, 'C': 121.2, 'E': 147.1,
    'Q': 146.2, 'G': 75.1,  'H': 155.2, 'I': 131.2, 'L': 131.2, 'K': 146.2,
    'M': 149.2, 'F': 165.2, 'P': 115.1, 'S': 105.1, 'T': 119.1, 'W': 204.2,
    'Y': 181.2, 'V': 117.1
};

function calculateMolecularWeight() {
    const sequenceType = document.getElementById('sequenceType').value;
    const sequence = document.getElementById('sequenceInput').value.trim().toUpperCase();
    let weight = 0;

    if (sequenceType === 'DNA') {
        if (!validateDNA(sequence)) return;
        weight = calculateWeight(sequence, dnaWeights);
    } else if (sequenceType === 'RNA') {
        if (!validateRNA(sequence)) return;
        weight = calculateWeight(sequence, rnaWeights);
    } else if (sequenceType === 'Protein') {
        if (!validateProtein(sequence)) return;
        weight = calculateWeight(sequence, proteinWeights);
    }

    document.getElementById('weightResult').innerText = `Molecular Weight: ${weight.toFixed(2)} Da`;
}

function calculateWeight(sequence, weights) {
    return Array.from(sequence).reduce((acc, nucleotide) => acc + (weights[nucleotide] || 0), 0);
}

function calculateCodonUsage() {
    const sequence = document.getElementById('sequenceInput').value.trim().toUpperCase();
    if (sequence.length % 3 !== 0) {
        document.getElementById('codonResult').innerText = 'Invalid DNA sequence. Length must be a multiple of 3.';
        return;
    }

    const codonCount = {};
    for (let i = 0; i < sequence.length; i += 3) {
        const codon = sequence.substring(i, i + 3);
        if (codonCount[codon]) {
            codonCount[codon]++;
        } else {
            codonCount[codon] = 1;
        }
    }

    let resultText = 'Codon Usage:\n';
    for (const codon in codonCount) {
        resultText += `${codon}: ${codonCount[codon]}\n`;
    }

    document.getElementById('codonResult').innerText = resultText;
}

function resetFields() {
    document.getElementById('sequenceInput').value = '';
    document.getElementById('weightResult').innerText = '';
    document.getElementById('codonResult').innerText = '';
}

function copyToClipboard() {
    const weightResult = document.getElementById('weightResult').innerText;
    const codonResult = document.getElementById('codonResult').innerText;
    const combinedResult = `${weightResult}\n\n${codonResult}`;

    const textarea = document.createElement('textarea');
    textarea.value = combinedResult;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert('Results copied to clipboard');
}

function validateDNA(sequence) {
    if (!/^[ATGC]*$/i.test(sequence)) {
        alert('Invalid DNA sequence. Only A, T, G, and C are allowed.');
        return false;
    }
    return true;
}

function validateRNA(sequence) {
    if (!/^[AUGC]*$/i.test(sequence)) {
        alert('Invalid RNA sequence. Only A, U, G, and C are allowed.');
        return false;
    }
    return true;
}

function validateProtein(sequence) {
    if (!/^[ACDEFGHIKLMNPQRSTVWY]*$/i.test(sequence)) {
        alert('Invalid protein sequence. Only standard amino acids are allowed.');
        return false;
    }
    return true;
}
