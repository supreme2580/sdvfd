export const vault_abi = [
    {
      "name": "VaultImpl",
      "type": "impl",
      "interface_name": "defi_vault::IVault"
    },
    {
      "name": "core::integer::u256",
      "type": "struct",
      "members": [
        {
          "name": "low",
          "type": "core::integer::u128"
        },
        {
          "name": "high",
          "type": "core::integer::u128"
        }
      ]
    },
    {
      "name": "defi_vault::IVault",
      "type": "interface",
      "items": [
        {
          "name": "get_user_balance",
          "type": "function",
          "inputs": [
            {
              "name": "account",
              "type": "core::starknet::contract_address::ContractAddress"
            }
          ],
          "outputs": [
            {
              "type": "core::integer::u256"
            }
          ],
          "state_mutability": "view"
        },
        {
          "name": "total_supply",
          "type": "function",
          "inputs": [],
          "outputs": [
            {
              "type": "core::integer::u256"
            }
          ],
          "state_mutability": "view"
        },
        {
          "name": "deposit",
          "type": "function",
          "inputs": [
            {
              "name": "amount",
              "type": "core::integer::u256"
            }
          ],
          "outputs": [],
          "state_mutability": "external"
        },
        {
          "name": "withdraw",
          "type": "function",
          "inputs": [
            {
              "name": "shares",
              "type": "core::integer::u256"
            }
          ],
          "outputs": [],
          "state_mutability": "external"
        }
      ]
    },
    {
      "name": "constructor",
      "type": "constructor",
      "inputs": [
        {
          "name": "token_address",
          "type": "core::starknet::contract_address::ContractAddress"
        }
      ]
    },
    {
      "kind": "enum",
      "name": "defi_vault::Vault::Event",
      "type": "event",
      "variants": []
    }
]

export const erc20_abi = [
    {
      "name": "MintableToken",
      "type": "impl",
      "interface_name": "src::mintable_token_interface::IMintableToken"
    },
    {
      "name": "core::integer::u256",
      "type": "struct",
      "members": [
        {
          "name": "low",
          "type": "core::integer::u128"
        },
        {
          "name": "high",
          "type": "core::integer::u128"
        }
      ]
    },
    {
      "name": "src::mintable_token_interface::IMintableToken",
      "type": "interface",
      "items": [
        {
          "name": "permissioned_mint",
          "type": "function",
          "inputs": [
            {
              "name": "account",
              "type": "core::starknet::contract_address::ContractAddress"
            },
            {
              "name": "amount",
              "type": "core::integer::u256"
            }
          ],
          "outputs": [],
          "state_mutability": "external"
        },
        {
          "name": "permissioned_burn",
          "type": "function",
          "inputs": [
            {
              "name": "account",
              "type": "core::starknet::contract_address::ContractAddress"
            },
            {
              "name": "amount",
              "type": "core::integer::u256"
            }
          ],
          "outputs": [],
          "state_mutability": "external"
        }
      ]
    },
    {
      "name": "MintableTokenCamelImpl",
      "type": "impl",
      "interface_name": "src::mintable_token_interface::IMintableTokenCamel"
    },
    {
      "name": "src::mintable_token_interface::IMintableTokenCamel",
      "type": "interface",
      "items": [
        {
          "name": "permissionedMint",
          "type": "function",
          "inputs": [
            {
              "name": "account",
              "type": "core::starknet::contract_address::ContractAddress"
            },
            {
              "name": "amount",
              "type": "core::integer::u256"
            }
          ],
          "outputs": [],
          "state_mutability": "external"
        },
        {
          "name": "permissionedBurn",
          "type": "function",
          "inputs": [
            {
              "name": "account",
              "type": "core::starknet::contract_address::ContractAddress"
            },
            {
              "name": "amount",
              "type": "core::integer::u256"
            }
          ],
          "outputs": [],
          "state_mutability": "external"
        }
      ]
    },
    {
      "name": "Replaceable",
      "type": "impl",
      "interface_name": "src::replaceability_interface::IReplaceable"
    },
    {
      "name": "core::array::Span::<core::felt252>",
      "type": "struct",
      "members": [
        {
          "name": "snapshot",
          "type": "@core::array::Array::<core::felt252>"
        }
      ]
    },
    {
      "name": "src::replaceability_interface::EICData",
      "type": "struct",
      "members": [
        {
          "name": "eic_hash",
          "type": "core::starknet::class_hash::ClassHash"
        },
        {
          "name": "eic_init_data",
          "type": "core::array::Span::<core::felt252>"
        }
      ]
    },
    {
      "name": "core::option::Option::<src::replaceability_interface::EICData>",
      "type": "enum",
      "variants": [
        {
          "name": "Some",
          "type": "src::replaceability_interface::EICData"
        },
        {
          "name": "None",
          "type": "()"
        }
      ]
    },
    {
      "name": "core::bool",
      "type": "enum",
      "variants": [
        {
          "name": "False",
          "type": "()"
        },
        {
          "name": "True",
          "type": "()"
        }
      ]
    },
    {
      "name": "src::replaceability_interface::ImplementationData",
      "type": "struct",
      "members": [
        {
          "name": "impl_hash",
          "type": "core::starknet::class_hash::ClassHash"
        },
        {
          "name": "eic_data",
          "type": "core::option::Option::<src::replaceability_interface::EICData>"
        },
        {
          "name": "final",
          "type": "core::bool"
        }
      ]
    },
    {
      "name": "src::replaceability_interface::IReplaceable",
      "type": "interface",
      "items": [
        {
          "name": "get_upgrade_delay",
          "type": "function",
          "inputs": [],
          "outputs": [
            {
              "type": "core::integer::u64"
            }
          ],
          "state_mutability": "view"
        },
        {
          "name": "get_impl_activation_time",
          "type": "function",
          "inputs": [
            {
              "name": "implementation_data",
              "type": "src::replaceability_interface::ImplementationData"
            }
          ],
          "outputs": [
            {
              "type": "core::integer::u64"
            }
          ],
          "state_mutability": "view"
        },
        {
          "name": "add_new_implementation",
          "type": "function",
          "inputs": [
            {
              "name": "implementation_data",
              "type": "src::replaceability_interface::ImplementationData"
            }
          ],
          "outputs": [],
          "state_mutability": "external"
        },
        {
          "name": "remove_implementation",
          "type": "function",
          "inputs": [
            {
              "name": "implementation_data",
              "type": "src::replaceability_interface::ImplementationData"
            }
          ],
          "outputs": [],
          "state_mutability": "external"
        },
        {
          "name": "replace_to",
          "type": "function",
          "inputs": [
            {
              "name": "implementation_data",
              "type": "src::replaceability_interface::ImplementationData"
            }
          ],
          "outputs": [],
          "state_mutability": "external"
        }
      ]
    },
    {
      "name": "AccessControlImplExternal",
      "type": "impl",
      "interface_name": "src::access_control_interface::IAccessControl"
    },
    {
      "name": "src::access_control_interface::IAccessControl",
      "type": "interface",
      "items": [
        {
          "name": "has_role",
          "type": "function",
          "inputs": [
            {
              "name": "role",
              "type": "core::felt252"
            },
            {
              "name": "account",
              "type": "core::starknet::contract_address::ContractAddress"
            }
          ],
          "outputs": [
            {
              "type": "core::bool"
            }
          ],
          "state_mutability": "view"
        },
        {
          "name": "get_role_admin",
          "type": "function",
          "inputs": [
            {
              "name": "role",
              "type": "core::felt252"
            }
          ],
          "outputs": [
            {
              "type": "core::felt252"
            }
          ],
          "state_mutability": "view"
        }
      ]
    },
    {
      "name": "RolesImpl",
      "type": "impl",
      "interface_name": "src::roles_interface::IMinimalRoles"
    },
    {
      "name": "src::roles_interface::IMinimalRoles",
      "type": "interface",
      "items": [
        {
          "name": "is_governance_admin",
          "type": "function",
          "inputs": [
            {
              "name": "account",
              "type": "core::starknet::contract_address::ContractAddress"
            }
          ],
          "outputs": [
            {
              "type": "core::bool"
            }
          ],
          "state_mutability": "view"
        },
        {
          "name": "is_upgrade_governor",
          "type": "function",
          "inputs": [
            {
              "name": "account",
              "type": "core::starknet::contract_address::ContractAddress"
            }
          ],
          "outputs": [
            {
              "type": "core::bool"
            }
          ],
          "state_mutability": "view"
        },
        {
          "name": "register_governance_admin",
          "type": "function",
          "inputs": [
            {
              "name": "account",
              "type": "core::starknet::contract_address::ContractAddress"
            }
          ],
          "outputs": [],
          "state_mutability": "external"
        },
        {
          "name": "remove_governance_admin",
          "type": "function",
          "inputs": [
            {
              "name": "account",
              "type": "core::starknet::contract_address::ContractAddress"
            }
          ],
          "outputs": [],
          "state_mutability": "external"
        },
        {
          "name": "register_upgrade_governor",
          "type": "function",
          "inputs": [
            {
              "name": "account",
              "type": "core::starknet::contract_address::ContractAddress"
            }
          ],
          "outputs": [],
          "state_mutability": "external"
        },
        {
          "name": "remove_upgrade_governor",
          "type": "function",
          "inputs": [
            {
              "name": "account",
              "type": "core::starknet::contract_address::ContractAddress"
            }
          ],
          "outputs": [],
          "state_mutability": "external"
        },
        {
          "name": "renounce",
          "type": "function",
          "inputs": [
            {
              "name": "role",
              "type": "core::felt252"
            }
          ],
          "outputs": [],
          "state_mutability": "external"
        }
      ]
    },
    {
      "name": "ERC20Impl",
      "type": "impl",
      "interface_name": "openzeppelin::token::erc20::interface::IERC20"
    },
    {
      "name": "openzeppelin::token::erc20::interface::IERC20",
      "type": "interface",
      "items": [
        {
          "name": "name",
          "type": "function",
          "inputs": [],
          "outputs": [
            {
              "type": "core::felt252"
            }
          ],
          "state_mutability": "view"
        },
        {
          "name": "symbol",
          "type": "function",
          "inputs": [],
          "outputs": [
            {
              "type": "core::felt252"
            }
          ],
          "state_mutability": "view"
        },
        {
          "name": "decimals",
          "type": "function",
          "inputs": [],
          "outputs": [
            {
              "type": "core::integer::u8"
            }
          ],
          "state_mutability": "view"
        },
        {
          "name": "total_supply",
          "type": "function",
          "inputs": [],
          "outputs": [
            {
              "type": "core::integer::u256"
            }
          ],
          "state_mutability": "view"
        },
        {
          "name": "balance_of",
          "type": "function",
          "inputs": [
            {
              "name": "account",
              "type": "core::starknet::contract_address::ContractAddress"
            }
          ],
          "outputs": [
            {
              "type": "core::integer::u256"
            }
          ],
          "state_mutability": "view"
        },
        {
          "name": "allowance",
          "type": "function",
          "inputs": [
            {
              "name": "owner",
              "type": "core::starknet::contract_address::ContractAddress"
            },
            {
              "name": "spender",
              "type": "core::starknet::contract_address::ContractAddress"
            }
          ],
          "outputs": [
            {
              "type": "core::integer::u256"
            }
          ],
          "state_mutability": "view"
        },
        {
          "name": "transfer",
          "type": "function",
          "inputs": [
            {
              "name": "recipient",
              "type": "core::starknet::contract_address::ContractAddress"
            },
            {
              "name": "amount",
              "type": "core::integer::u256"
            }
          ],
          "outputs": [
            {
              "type": "core::bool"
            }
          ],
          "state_mutability": "external"
        },
        {
          "name": "transfer_from",
          "type": "function",
          "inputs": [
            {
              "name": "sender",
              "type": "core::starknet::contract_address::ContractAddress"
            },
            {
              "name": "recipient",
              "type": "core::starknet::contract_address::ContractAddress"
            },
            {
              "name": "amount",
              "type": "core::integer::u256"
            }
          ],
          "outputs": [
            {
              "type": "core::bool"
            }
          ],
          "state_mutability": "external"
        },
        {
          "name": "approve",
          "type": "function",
          "inputs": [
            {
              "name": "spender",
              "type": "core::starknet::contract_address::ContractAddress"
            },
            {
              "name": "amount",
              "type": "core::integer::u256"
            }
          ],
          "outputs": [
            {
              "type": "core::bool"
            }
          ],
          "state_mutability": "external"
        }
      ]
    },
    {
      "name": "ERC20CamelOnlyImpl",
      "type": "impl",
      "interface_name": "openzeppelin::token::erc20::interface::IERC20CamelOnly"
    },
    {
      "name": "openzeppelin::token::erc20::interface::IERC20CamelOnly",
      "type": "interface",
      "items": [
        {
          "name": "totalSupply",
          "type": "function",
          "inputs": [],
          "outputs": [
            {
              "type": "core::integer::u256"
            }
          ],
          "state_mutability": "view"
        },
        {
          "name": "balanceOf",
          "type": "function",
          "inputs": [
            {
              "name": "account",
              "type": "core::starknet::contract_address::ContractAddress"
            }
          ],
          "outputs": [
            {
              "type": "core::integer::u256"
            }
          ],
          "state_mutability": "view"
        },
        {
          "name": "transferFrom",
          "type": "function",
          "inputs": [
            {
              "name": "sender",
              "type": "core::starknet::contract_address::ContractAddress"
            },
            {
              "name": "recipient",
              "type": "core::starknet::contract_address::ContractAddress"
            },
            {
              "name": "amount",
              "type": "core::integer::u256"
            }
          ],
          "outputs": [
            {
              "type": "core::bool"
            }
          ],
          "state_mutability": "external"
        }
      ]
    },
    {
      "name": "constructor",
      "type": "constructor",
      "inputs": [
        {
          "name": "name",
          "type": "core::felt252"
        },
        {
          "name": "symbol",
          "type": "core::felt252"
        },
        {
          "name": "decimals",
          "type": "core::integer::u8"
        },
        {
          "name": "initial_supply",
          "type": "core::integer::u256"
        },
        {
          "name": "recipient",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "name": "permitted_minter",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "name": "provisional_governance_admin",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "name": "upgrade_delay",
          "type": "core::integer::u64"
        }
      ]
    },
    {
      "name": "increase_allowance",
      "type": "function",
      "inputs": [
        {
          "name": "spender",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "name": "added_value",
          "type": "core::integer::u256"
        }
      ],
      "outputs": [
        {
          "type": "core::bool"
        }
      ],
      "state_mutability": "external"
    },
    {
      "name": "decrease_allowance",
      "type": "function",
      "inputs": [
        {
          "name": "spender",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "name": "subtracted_value",
          "type": "core::integer::u256"
        }
      ],
      "outputs": [
        {
          "type": "core::bool"
        }
      ],
      "state_mutability": "external"
    },
    {
      "name": "increaseAllowance",
      "type": "function",
      "inputs": [
        {
          "name": "spender",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "name": "addedValue",
          "type": "core::integer::u256"
        }
      ],
      "outputs": [
        {
          "type": "core::bool"
        }
      ],
      "state_mutability": "external"
    },
    {
      "name": "decreaseAllowance",
      "type": "function",
      "inputs": [
        {
          "name": "spender",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "name": "subtractedValue",
          "type": "core::integer::u256"
        }
      ],
      "outputs": [
        {
          "type": "core::bool"
        }
      ],
      "state_mutability": "external"
    },
    {
      "kind": "struct",
      "name": "openzeppelin::token::erc20_v070::erc20::ERC20::Transfer",
      "type": "event",
      "members": [
        {
          "kind": "data",
          "name": "from",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "kind": "data",
          "name": "to",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "kind": "data",
          "name": "value",
          "type": "core::integer::u256"
        }
      ]
    },
    {
      "kind": "struct",
      "name": "openzeppelin::token::erc20_v070::erc20::ERC20::Approval",
      "type": "event",
      "members": [
        {
          "kind": "data",
          "name": "owner",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "kind": "data",
          "name": "spender",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "kind": "data",
          "name": "value",
          "type": "core::integer::u256"
        }
      ]
    },
    {
      "kind": "struct",
      "name": "src::replaceability_interface::ImplementationAdded",
      "type": "event",
      "members": [
        {
          "kind": "data",
          "name": "implementation_data",
          "type": "src::replaceability_interface::ImplementationData"
        }
      ]
    },
    {
      "kind": "struct",
      "name": "src::replaceability_interface::ImplementationRemoved",
      "type": "event",
      "members": [
        {
          "kind": "data",
          "name": "implementation_data",
          "type": "src::replaceability_interface::ImplementationData"
        }
      ]
    },
    {
      "kind": "struct",
      "name": "src::replaceability_interface::ImplementationReplaced",
      "type": "event",
      "members": [
        {
          "kind": "data",
          "name": "implementation_data",
          "type": "src::replaceability_interface::ImplementationData"
        }
      ]
    },
    {
      "kind": "struct",
      "name": "src::replaceability_interface::ImplementationFinalized",
      "type": "event",
      "members": [
        {
          "kind": "data",
          "name": "impl_hash",
          "type": "core::starknet::class_hash::ClassHash"
        }
      ]
    },
    {
      "kind": "struct",
      "name": "src::access_control_interface::RoleGranted",
      "type": "event",
      "members": [
        {
          "kind": "data",
          "name": "role",
          "type": "core::felt252"
        },
        {
          "kind": "data",
          "name": "account",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "kind": "data",
          "name": "sender",
          "type": "core::starknet::contract_address::ContractAddress"
        }
      ]
    },
    {
      "kind": "struct",
      "name": "src::access_control_interface::RoleRevoked",
      "type": "event",
      "members": [
        {
          "kind": "data",
          "name": "role",
          "type": "core::felt252"
        },
        {
          "kind": "data",
          "name": "account",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "kind": "data",
          "name": "sender",
          "type": "core::starknet::contract_address::ContractAddress"
        }
      ]
    },
    {
      "kind": "struct",
      "name": "src::access_control_interface::RoleAdminChanged",
      "type": "event",
      "members": [
        {
          "kind": "data",
          "name": "role",
          "type": "core::felt252"
        },
        {
          "kind": "data",
          "name": "previous_admin_role",
          "type": "core::felt252"
        },
        {
          "kind": "data",
          "name": "new_admin_role",
          "type": "core::felt252"
        }
      ]
    },
    {
      "kind": "struct",
      "name": "src::roles_interface::GovernanceAdminAdded",
      "type": "event",
      "members": [
        {
          "kind": "data",
          "name": "added_account",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "kind": "data",
          "name": "added_by",
          "type": "core::starknet::contract_address::ContractAddress"
        }
      ]
    },
    {
      "kind": "struct",
      "name": "src::roles_interface::GovernanceAdminRemoved",
      "type": "event",
      "members": [
        {
          "kind": "data",
          "name": "removed_account",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "kind": "data",
          "name": "removed_by",
          "type": "core::starknet::contract_address::ContractAddress"
        }
      ]
    },
    {
      "kind": "struct",
      "name": "src::roles_interface::UpgradeGovernorAdded",
      "type": "event",
      "members": [
        {
          "kind": "data",
          "name": "added_account",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "kind": "data",
          "name": "added_by",
          "type": "core::starknet::contract_address::ContractAddress"
        }
      ]
    },
    {
      "kind": "struct",
      "name": "src::roles_interface::UpgradeGovernorRemoved",
      "type": "event",
      "members": [
        {
          "kind": "data",
          "name": "removed_account",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "kind": "data",
          "name": "removed_by",
          "type": "core::starknet::contract_address::ContractAddress"
        }
      ]
    },
    {
      "kind": "enum",
      "name": "openzeppelin::token::erc20_v070::erc20::ERC20::Event",
      "type": "event",
      "variants": [
        {
          "kind": "nested",
          "name": "Transfer",
          "type": "openzeppelin::token::erc20_v070::erc20::ERC20::Transfer"
        },
        {
          "kind": "nested",
          "name": "Approval",
          "type": "openzeppelin::token::erc20_v070::erc20::ERC20::Approval"
        },
        {
          "kind": "nested",
          "name": "ImplementationAdded",
          "type": "src::replaceability_interface::ImplementationAdded"
        },
        {
          "kind": "nested",
          "name": "ImplementationRemoved",
          "type": "src::replaceability_interface::ImplementationRemoved"
        },
        {
          "kind": "nested",
          "name": "ImplementationReplaced",
          "type": "src::replaceability_interface::ImplementationReplaced"
        },
        {
          "kind": "nested",
          "name": "ImplementationFinalized",
          "type": "src::replaceability_interface::ImplementationFinalized"
        },
        {
          "kind": "nested",
          "name": "RoleGranted",
          "type": "src::access_control_interface::RoleGranted"
        },
        {
          "kind": "nested",
          "name": "RoleRevoked",
          "type": "src::access_control_interface::RoleRevoked"
        },
        {
          "kind": "nested",
          "name": "RoleAdminChanged",
          "type": "src::access_control_interface::RoleAdminChanged"
        },
        {
          "kind": "nested",
          "name": "GovernanceAdminAdded",
          "type": "src::roles_interface::GovernanceAdminAdded"
        },
        {
          "kind": "nested",
          "name": "GovernanceAdminRemoved",
          "type": "src::roles_interface::GovernanceAdminRemoved"
        },
        {
          "kind": "nested",
          "name": "UpgradeGovernorAdded",
          "type": "src::roles_interface::UpgradeGovernorAdded"
        },
        {
          "kind": "nested",
          "name": "UpgradeGovernorRemoved",
          "type": "src::roles_interface::UpgradeGovernorRemoved"
        }
      ]
    }
  ]