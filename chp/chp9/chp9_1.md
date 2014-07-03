## Bioinformatics/BioCAD prerequisites to SLIC/Gibson/CPEC/SLiCE and Golden Gate DNA assembly

Before using j5 to design SLIC/Gibson/CPEC/SLiCE or Golden Gate assembly, there are several important bioinformatics/BioCAD tasks to perform.

For a recent (non-exhaustive, for example not including j5 or DeviceEditor) review of currently available BioCAD tools, please see (MacDonald 2011).

#### SLIC/Gibson/CPEC/SLiCE:

As noted in the SLIC/Gibson/CPEC/SLiCE description section, there are two situations that will potentially be problematic for assembly:

1) Sequence repeats, or highly homologous sequences at the termini of assembly pieces:

As the previous DNA assembly example shows, it may be desirable to include a given part more than once in the same assembly (e.g. a repeated terminator or promoter). However, (aside from decreasing the physical stability of the resulting contruct (via in vivo recombination processes)) these sequence repeats can be debilitating for the SLIC/Gibson/CPEC/SLiCE assembly methods, and should be avoided where possible. Work arounds include using BioCAD tools to identify parts with similar function but disparate DNA sequence (e.g. two sequences encoding the same protein with different codons). If the repeated sequences are not located at the termini of the assembly pieces, they might not significantly affect SLIC or Gibson assembly, but they will be problematic for CPEC or SLiCE assembly. In certain situations, it may be better to perform the assembly with the Golden Gate method, which is not as affected by sequence repeats. j5 detects highly homologous sequences, automatically alerting the user to these potential problems when designing DNA assemblies.

2) Assembly piece termini with stable secondary structure:

If the terminus of an assembly piece has very stable secondary structure (which can be assessed via the DINAMelt Quikfold server, or other related software), as would be anticipated for a terminator, it will not be able to base-pair/anneal with the neighboring assembly piece, and thus inhibit assembly. A work around is to add sufficient flanking sequence so that the problematic section with secondary structure is no longer at the terminus. In certain situations, it may be better to perform the assembly with the Golden Gate method, which is not as affected by termini with stable secondary structure. Integrating secondary structure prediction into j5, so as to automatically alert the user to these potential problems when designing DNA assemblies (with out them having to subsequently check with a separate tool), is currently under development.

#### Golden Gate:

As noted in the Golden Gate description section, there is one situation that will potentially be problematic for assembly:

1) BsaI (or other selected type IIs endonuclease) recognition sites are present within the DNA fragments to assemble (not only at the assembly piece termini).

In this instance, it is possible to generate (silent) point mutations to disrupt these sites (the site sequence is defined in the j5 parameters file). Even with the undesired BsaI sites present, assembly may still occur (since the digest/ligation is a reversible-process), but the efficiency will be decreased.

#### BioBrick compatible assembly:

If the resulting construct is desired to be BioBrick compatible, then it is necessary to identify and remove any undesired BioBrick sites, by generating (silent) point mutations to disrupt these sites.