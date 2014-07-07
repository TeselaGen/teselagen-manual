## Creating Eugene design specification rules

After naming a part on the design canvas (NOTE: mapping a sequence to the part, as long as the part has been named, is not a pre-requisite), it is possible to create Eugene design specification rules ([Bilitchenko 2011A](http://www.ncbi.nlm.nih.gov/pubmed/21559524), [Bilitchenko 2011B](http://www.ncbi.nlm.nih.gov/pubmed/21601677)) for the part to ensure that only desired DNA designs are constructed.

With a part selected (active) in the design canvas, to add Eugene design specification rules for the selected part ("Operand 1") go to the right panel of the DeviceEditor display, and click on "Add Rule" just below "Eugene Rules". Doing so will pop-up a new "Add Eugene rule" dialog box, in which you can specify the name for the new rule, the type of Eugene rule (the "Operator", which may be "AFTER", "BEFORE", "THEN", "NEXTTO", "MORETHAN", or their negated "NOT" variants), and the additional information required for fully specifying the rule (this includes an integer for the "MORETHAN" operator, or another part ("Operand 2") for the "AFTER", "BEFORE", "THEN", and "NEXTTO" operators). For more information about how j5 implements these Eugene design specification rules (and why they are useful) when designing DNA assemblies, refer to the "Eugene rules list file" page in the "j5 input files" section.

Similarly, it is possible to delete a Eugene design specification rule for the selected part by going to the right panel of the DeviceEditor display, selecting/highlighting one of the rows/rules in the Eugene rules table just below "Eugene Rules", and clicking on "Delete Rule". Doing so will pop-up a "Delete Rule" confirmation dialog box.

Note that if the names of any of the parts for which Eugene design rules have been specified (either as "Operand 1" or as "Operand 2" in the Eugene rules table) are changed (e.g. from "double_terminator" to "dblterm"), the Eugene rules are automatically updated to reflect these changes. 

All parts associated with Eugene rules are identifiable on the design canvas by orange circle indicator lights at bottom right.

It is also possible to import a Eugene rules file instead of creating new rules one at a time, as explained in the next subsection.