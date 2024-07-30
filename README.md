# GeneCalc

**GeneCalc** is a web-based tool designed for molecular biologists and bioinformaticians to calculate the molecular weight of DNA, RNA, or protein sequences and to analyze codon usage within DNA sequences. This tool provides a user-friendly interface and advanced features to enhance the user experience, making it an essential resource for genetic sequence analysis.

## Features

- **Molecular Weight Calculation:** Calculate the molecular weight of DNA, RNA, or protein sequences based on their nucleotide or amino acid composition.
- **Codon Usage Calculator:** Determine the frequency of each codon in a DNA sequence, aiding in gene optimization for different organisms.
- **User-Friendly Interface:** Aesthetic and calming color palette with interactive buttons and smooth animations.
- **Responsive Design:** Optimized layout for various screen sizes, ensuring a seamless experience across devices.
- **Additional Utilities:** Copy results to clipboard, reset input fields, and validate sequence inputs for accuracy.

## Usage

### Molecular Weight Calculator

1. **Select Sequence Type:**
   - Choose between DNA, RNA, or Protein from the dropdown menu.
2. **Enter Sequence:**
   - Input the nucleotide or amino acid sequence in the text area.
3. **Calculate Molecular Weight:**
   - Click on the "Calculate Molecular Weight" button to get the result.

### Codon Usage Calculator

1. **Enter DNA Sequence:**
   - Ensure the DNA sequence length is a multiple of 3.
2. **Calculate Codon Usage:**
   - Click on the "Calculate Codon Usage" button to see the frequency of each codon.
3. **Copy Results (Optional):**
   - Click on the "Copy Results" button to copy the codon usage results to the clipboard.

## How It Works

### Molecular Weight Calculation

The molecular weight calculation is performed by summing the weights of each nucleotide or amino acid in the given sequence. The weights used are as follows:

- **DNA Nucleotides:**
  - Adenine (A): 331.2 Da
  - Thymine (T): 322.2 Da
  - Guanine (G): 347.2 Da
  - Cytosine (C): 307.2 Da

- **RNA Nucleotides:**
  - Adenine (A): 347.2 Da
  - Uracil (U): 324.2 Da
  - Guanine (G): 363.2 Da
  - Cytosine (C): 323.2 Da

- **Amino Acids:**
  - Alanine (A): 89.1 Da
  - Arginine (R): 174.2 Da
  - Asparagine (N): 132.1 Da
  - Aspartic acid (D): 133.1 Da
  - Cysteine (C): 121.2 Da
  - Glutamic acid (E): 147.1 Da
  - Glutamine (Q): 146.2 Da
  - Glycine (G): 75.1 Da
  - Histidine (H): 155.2 Da
  - Isoleucine (I): 131.2 Da
  - Leucine (L): 131.2 Da
  - Lysine (K): 146.2 Da
  - Methionine (M): 149.2 Da
  - Phenylalanine (F): 165.2 Da
  - Proline (P): 115.1 Da
  - Serine (S): 105.1 Da
  - Threonine (T): 119.1 Da
  - Tryptophan (W): 204.2 Da
  - Tyrosine (Y): 181.2 Da
  - Valine (V): 117.1 Da

### Codon Usage Calculation

The codon usage calculation counts the frequency of each codon in a given DNA sequence. This information can help in optimizing gene sequences for expression in different organisms, as different organisms may have varying preferences for specific codons.

## Useful Information for Geneticists and Biotechnologists

- **Gene Optimization:** Understanding codon usage is crucial for optimizing genes for expression in different organisms. GeneCalc provides a quick and easy way to analyze codon usage.
- **Molecular Weight:** Knowing the molecular weight of nucleic acids and proteins is essential for various experimental and analytical procedures, including mass spectrometry, gel electrophoresis, and more.
- **Sequence Validation:** GeneCalc includes validation to ensure the accuracy of input sequences, reducing the likelihood of errors in downstream applications.

## Code Overview

### HTML

The HTML structure includes:

- A container for the entire application.
- Form elements for sequence type selection and sequence input.
- Buttons for triggering calculations and resetting fields.
- Sections for displaying results.

### CSS

The CSS styles provide:

- Aesthetic and calming color palette for the background and text.
- Enhanced buttons with hover effects and smooth transitions.
- Responsive design to ensure a consistent layout across various devices.
- Custom styling for form elements and result display sections.

### JavaScript

The JavaScript functionality includes:

- **Molecular Weight Calculation:**
  - Calculates the molecular weight of DNA, RNA, or protein sequences based on predefined weights for each nucleotide or amino acid.
- **Codon Usage Calculation:**
  - Analyzes a DNA sequence to count the frequency of each codon.
- **Input Validation:**
  - Ensures that only valid sequences are processed for each sequence type.
- **Additional Utilities:**
  - Copy results to clipboard and reset input fields and results.

## Installation

To run GeneCalc locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/genecalc.git

2. Navigate to the project directory:
   ```bash
   cd genecalc

3. Open index.html in your web browser.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue to discuss any changes.

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/Abinbn/GeneCalc/blob/main/LICENSE) file for details.

## Contact
For any inquiries or feedback, don't hesitate to get in touch with [ME](mailto:solodeveloper790@example.com) .
