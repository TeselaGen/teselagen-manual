####Welcome to Teselagen's Manual. 

We strive to provide a design-build-test-evolve platform for automated combinatorial DNA assembly; with sequence viewing and editing, forward design, and scarless assembly all at the least possible cost. Please use the menu on the left to learn more about our Platform. 

##### Table of Contents

* Intro. to BioCAD/CAM
    * From specification, to design, to implementation, to assay
* Intro. to DNA Assembly
    * The DNA assembly challenge
    * The traditional multiple cloning site approach
    * The BioBrick approach
    * The SLIC, Gibson, CPEC and SLiCE assembly methods (and GeneArt Seamless Cloning)
    * The Golden Gate assembly method (and MoClo and GoldenBraid)
* Synthetic Evolution
    * TeselaGens Synthetic Evolution Workflow
    * Bioinformatics and BioCAD preliminaries
* BioCAD demos
    * DNA Sequence and Part Management
    * Sequence Editing and Part Creation
    * Designing with Device Editor
    * Generating assembly instructions with J5
* Managing DNA sequences
    * Importing DNA sequences into your sequence library
    * Creating a sequence
    * Editing a sequence
    * Sequence analysis tools
    * Mapping sequence to parts
* Managing columns
    * Adding and removing columns
    * Changing column SBOL Visual icons
    * Changing column assembly orientations
    * Changing column names
    * Controlling column assembly directives for j5
    * Changing the assembly product type (circular-linear)
* [Managing specific parts
    * Editing a part's name or definition
    * Changing the assembly strategy for a part
    * Creating Eugene design specification rules
    * Importing a set of Eugene design specification rules
    * Cutting, copying, pasting parts
* Design files
    * DeviceEditor format (.xml) design files
* DNA assembly protocol generator
    * Bioinformatics/BioCAD prerequisites to SLIC/Gibson/CPEC/SLiCE and Golden Gate DNA assembly
    * Process flow for j5 and integration with Registries of Biological Parts and BioCAD tools
    * Brief survey of j5 functionality
* Specific examples of using j5
    * SLIC, Gibson, CPEC assembly (and GeneArt® Seamless Cloning)
    * Combinatorial SLIC, Gibson, CPEC assembly
    * Mock assembly
    * Combinatorial Mock assembly
    * Golden Gate assembly
    * Combinatorial Golden Gate assembly
    * Condensation of multiple j5 assembly files
    * Distribution of PCR reactions
    * Conversion of SBOL XML &lt;-&gt; GenBank sequence files
* File formats used by j5
    * Comma separated value (.csv); FASTA (.fas) and Genbank (.gb) sequence files
    * jbei-seq format (.xml) sequence files
    * SBOL XML format (.xml) sequence files
* j5 input files
    * j5 parameters file
    * Sequences list file and zipped sequences file
    * Parts list file
    * Target part order list file
    * Eugene rules list file
    * Master plasmids list file
    * Master oligos list file
    * Master direct syntheses list file
    * Assembly files to condense list file and zipped assembly files file
    * Downstream automation parameters file
    * Multi-well plate file
    * Source plate list file and zipped source plate files file
* j5 output assembly files
    * SLIC/Gibson/CPEC/SLiCE assembly output file
    * Combinatorial SLIC/Gibson/CPEC/SLiCE assembly output file
    * Mock Assembly output file
    * Combinatorial Mock Assembly output file
    * Golden Gate assembly output file
    * Combinatorial Golden Gate assembly output file
    * Condensed multiple j5 assembly files
* j5 downstream automation
    * Distribute PCR reactions file
    * NextGen (eXeTek) expression workstation control file
    * PR-PR distribute PCR reactions configuration (.pr) files
* j5 error messages
    * j5 input error messages
    * SLIC/Gibson/CPEC/SLiCE or Golden Gate specific error messages
    * Distribute PCR Reactions specific error messages
    * Condense multiple j5 assembly files specific error messages
    * Internal error messages
* Experimental protocols
    * SLIC
    * Gibson
    * CPEC
    * SLiCE
    * Golden Gate
    * 5' phosphorylation of annealed DNA oligos
* Related publications
    * How to cite j5, and publications citing j5

##### Contact Info

For business inquiries or other questions, please contact: Contact [at] Teselagen [dot] com