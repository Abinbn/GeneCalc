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
4. **Reset Fields (Optional):**
   - Click on the "Reset" button to clear the input fields and results.

### Codon Usage Calculator

1. **Enter DNA Sequence:**
   - Ensure the DNA sequence length is a multiple of 3.
2. **Calculate Codon Usage:**
   - Click on the "Calculate Codon Usage" button to see the frequency of each codon.
3. **Copy Results (Optional):**
   - Click on the "Copy Results" button to copy the codon usage results to the clipboard.
4. **Reset Fields (Optional):**
   - Click on the "Reset" button to clear the input fields and results.

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
   git clone https://Abinbn/genecalc.git
