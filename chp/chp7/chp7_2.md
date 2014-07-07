## Changing the assembly strategy for a part

After mapping a sequence to a part, it is possible to instruct j5 to use a particular assembly strategy for the part during DNA construction.

With a part selected (active) in the design canvas, to set the assembly strategy for the selected part, go to the right panel of the DeviceEditor display, and click on the drop-down menu button just below "Forced Assembly Strategy". Doing so will display the menu of assembly strategy choices you may choose from ("None" (the default, allowing j5 the freedom to choose), "DIGEST", "Direct Synthesis", "PCR", "Embed_in_primer_reverse", "Embed_in_primer_forward", and "Annealed Oligos" (see the "Target part order list file" page in the "j5 input files" section for more information)).

Note that setting a "DIGEST" forced assembly strategy for a part in a column other than the first is not allowable by default.

The top-most part with a forced assembly strategy in the column dictates the forced assembly strategy for the column, which is displayed in the collection info tab.

All parts with forced assembly strategies are identifiable on the design canvas by blue rectangle indicator lights at top left. For combinatorial designs, setting a forced assembly strategy for a part that conflicts (i.e. a forced assembly strategy that is not the same) with the forced assembly strategy of its column will result in a red rectangle indicator light at top left.