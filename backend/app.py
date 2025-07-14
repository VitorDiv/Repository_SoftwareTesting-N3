from flask import Flask, request, jsonify

app = Flask(__name__)
dados = []

@app.route("/items", methods=["GET"])
def get_items():
    return jsonify(dados), 200

@app.route("/items", methods=["POST"])
def add_item():
    item = request.json
    dados.append(item)
    return jsonify(item), 201

@app.route("/items/<int:index>", methods=["PUT"])
def update_item(index):
    if index >= len(dados):
        return {"erro": "Item não encontrado"}, 404
    dados[index] = request.json
    return jsonify(dados[index])

@app.route("/items/<int:index>", methods=["DELETE"])
def delete_item(index):
    if index >= len(dados):
        return {"erro": "Item não encontrado"}, 404
    item = dados.pop(index)
    return jsonify(item)

if __name__ == "__main__":
    app.run(debug=True)
