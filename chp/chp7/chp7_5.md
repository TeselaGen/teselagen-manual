## Cutting, copying, pasting parts

After mapping a sequence to a part icon, it is possible to copy/paste the part (even between different Device Editor design canvases in separate tabs).

###### CUTTING A PART:

It is possible to cut a part by right-clicking on the part, and then clicking on "Cut" in the resulting pop-up menu. 

###### COPYING A PART:

It is possible to copy a part by right-clicking on the part, and then clicking on "Copy" in the resulting pop-up menu. 

###### PASTING A PART:

It is possible to paste a part by right-clicking on an empty grid location, and then clicking on "Paste" in the resulting pop-up menu. 

There are two different styles of pasting a part that has been copied to the clipboard: linked paste and regular paste. These two variants are described separately below.

###### LINKED PASTE:

A linked paste results in the pasted part retaining a link (or connection) to the part it was copied from. When you click on (activate) a part that is linked to one or more other parts in the design canvas, all of the linked parts will be outlined with a blue border. Changing the part definition of a linked part will affect all of the parts it is linked to. In the video demonstration provided above, note that when the part name is changed from "double_terminator" to "dblterm" for one of the two linked parts, the part name is changed for its linked sibling as well. Although not specifically highlighted in the demonstration video above, the same is also true of Eugene design rules (linked parts share the same set of Eugene rules).

Note, however, that not all properties are shared between linked parts. As shown in the video demonstration above, linked parts may differ in their "Forced Assembly Strategy" (e.g. "Direct Synthesis" vs. "Embed_in_primer_reverse"). Changing these specific properties does not affect the linked siblings.

Linked parts are especially useful in combinatorial assembly designs, when you might like to have the same part located at various positions (or orientations) within the design. For example, this allows you to vary the copy-number of the part (which you can limit by setting the "NOT MORETHAN" Eugene design rule for the part) or to vary the operon-ordering of the part. If you ever decide to re-name the linked part, or add a new Eugene design rule, etc., you only need to do so once, instead of having to separately update all of the copies in the design canvas.

###### REGULAR PASTE:

A regular paste results in the pasted part retaining no link to the part it was copied from. While initially most of the properties of the regularly pasted part are identical to the part it was copied from (with the exception of the part's name, which is not allowed to be the same as the part it was copied from, if pasted into the same design canvas), any changes made to the regularly pasted part do not affect the part it was copied from. Note that the regularly pasted part does not retain any of the Eugene design rules defined for the part it was copied from.

Regularly pasting a part is useful if you want to use a slightly modified variant of a part that is already defined, such as changing the where the sequence mapped to the part icon starts ("StartBP") and stops ( "StopBP"). In the video example above, the definition of the regularly pasted GFP part is changed so as to remove the stop codon from its sequence, without having to go through an entire sequence mapping procedure.

###### PASTING A PART TO ANOTHER DEVICEEDITOR SESSION IN A SEPARATE BROWSER TAB:

Much like pasting in to the same design canvas from which the part was copied from (described immediately above), it is possible to paste a part into the design canvas of a separate DeviceEditor session in a separate browser tab. The main difference is that it is only possible to do a regular paste (linked pastes are not allowed between DeviceEditor sessions). Another subtle distinction is that if you paste into the design canvas of a separate DeviceEditor session, the part name may match the part it was copied from. This feature is very useful if you would like to re-use a part that you have already defined in another DeviceEditor design.

###### CUTTING/PASTING A PART FROM THE PART HOLDING AREA:

Parts contained within the part holding area (at the bottom of the design canvas) may be cut and pasted into a collection, either in the same DeviceEditor session or into a DeviceEditor session in a separate browser tab. Pasting into the collection in the same DeviceEditor session will remove the part from the part holding area, whereas pasting into a DeviceEditor session in a separate browser tab will not remove the part from the part holding area.