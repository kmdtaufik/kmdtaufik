{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs = {
    self,
    nixpkgs,
    ...
  }: let
    # 1. Define the specific system you are on
    system = "x86_64-linux";
    pkgs = import nixpkgs {
      inherit system;
      config.allowUnfree = true;
    };
  in {
    devShells.${system} = {
      default = pkgs.mkShell {
        packages = with pkgs; [
          antigravity-fhs
          bun
          nodejs
        ];
      };
    };
  };
}
