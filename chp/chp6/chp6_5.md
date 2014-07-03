## Controlling column assembly directives for j5

After adding columns to the collection, we can change the j5 assembly directives for each of the columns. This can be done in the panel on the right side of the DeviceEditor display within the "Collection Info" tab, with the Collection Table in its expanded state.

For more information on the following j5 DNA assembly design directives, refer to the "Target part order list file" page under the "j5 input files" section.

###### CONTROLLING FORCED ASSEMBLY STRATEGIES:

The forced assembly strategy is displayed for each column within the fourth column (whose header reads "FAS") of the collection table. The forced assembly strategy is determined by the column's top-most part with a forced assembly strategy. For more information about changing the forced assembly strategy, see "Changing the assembly strategy for a part" page within this section.

###### CONTROLLING DIRECT SYNTHESIS FIREWALLS:

Click on the direct synthesis firewall true/false field (contained within the fifth column (whose header reads "DFS") of the collection table) for the desired column entry and edit the field to either "true" (checked) or "false" (unchecked) as you see fit. If the direct synthesis firewall for the column is set to "true", the direct synthesis firewall will be visually represented in the design canvas by a red vertical line separating the two affected columns. A direct synthesis firewall between the last and first columns (for circular DNA designs (e.g. plasmids)) is represented by a red vertical line after the last column.

###### CONTROLLING FORCED RELATIVE OVERHANGS:

Click on the forced relative overhang field (contained within the sixth column (whose header reads "FRO") of the collection table) for the desired column entry and edit the field to your selected forced relative overhang position (an integral number (positive or negative) of base-pairs). If you enter something in this field other than an integer, your change will be rejected. Deleting the contents of the field (or if it is blank) indicates that there isn't a forced relative overhang for the respective assembly junction.

###### CONTROLLING 5' AND 3' EXTRA CPEC OVERLAP BPS:

The 5' and 3' Extra CPEC overlap bps are displayed for each column entry within the seventh and eighth columns (whose headers reads "5'Ex" and "3'Ex") of the collection table. Edit the fields to your selected extra bps (integral numbers (positive or negative) of base-pairs). If you enter something in these fields other than integers, your changes will be rejected. Deleting the contents of the fields (or if they are blank) indicates that there aren't a forced extra 5' or 3' CPEC overlap bps for the respective assembly junction.


