const kind_data = [
  [0, "Metadata"],
  [1, "Short Text Note"],
  [2, "Recommend Relay"],
  [3, "Contacts"],
  [4, "Encrypted Direct Messages"],
  [5, "Event Deletion"],
  [6, "Repost"],
  [7, "Reaction"],
  [8, "Badge Award"],
  [16, "Generic Repost"],
  [40, "Channel Creation"],
  [41, "Channel Metadata"],
  [42, "Channel Message"],
  [43, "Channel Hide Message"],
  [44, "Channel Mute User"],
  [1063, "File Metadata"],
  [1311, "Live Chat Message"],
  [1984, "Reporting"],
  [1985, "Label"],
  [4550, "Community Post Approval"],
  [9041, "Zap Goal"],
  [9734, "Zap Request"],
  [9735, "Zap"],
  [10000, "Mute List"],
  [10001, "Pin List"],
  [10002, "Relay List Metadata"],
  [13194, "Wallet Info"],
  [22242, "Client Authentication"],
  [23194, "Wallet Request"],
  [23195, "Wallet Response"],
  [24133, "Nostr Connect"],
  [27235, "HTTP Auth"],
  [30000, "Categorized People List"],
  [30001, "Categorized Bookmark List"],
  [30008, "Profile Badges"],
  [30009, "Badge Definition"],
  [30017, "Create or update a stall"],
  [30018, "Create or update a product"],
  [30023, "Long-form Content"],
  [30024, "Draft Long-form Content"],
  [30078, "Application-specific Data"],
  [30311, "Live Event"],
  [30315, "User Statuses"],
  [30402, "Classified Listing"],
  [30403, "Draft Classified Listing"],
  [31922, "Date-Based Calendar Event"],
  [31923, "Time-Based Calendar Event"],
  [31924, "Calendar"],
  [31925, "Calendar Event RSVP"],
  [31989, "Handler recommendation"],
  [31990, "Handler information"],
  [34550, "Community Definition"],
];

export function getKindName(kind: string): string {
  for (let i = 0; i < kind_data.length; i++) {
    if (kind_data[i][0].toString() == kind) {
      return kind_data[i][1] as string;
    }
  }
  return `kind ${kind}`;
}
