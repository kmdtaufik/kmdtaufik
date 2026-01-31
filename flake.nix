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

    # 2. Define 'pkgs' by explicitly grabbing the packages for that system
    pkgs = nixpkgs.legacyPackages.${system};
  in {
    devShells.${system} = {
      default = pkgs.mkShell {
        packages = with pkgs; [
          bun
          nodejs
        ];
      };
    };
  };
}
