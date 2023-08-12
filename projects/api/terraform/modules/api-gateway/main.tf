resource "aws_apigatewayv2_api" "websocket" {
  name                       = "cim-api-${var.cim_environment}"
  protocol_type              = "WEBSOCKET"
  route_selection_expression = "$request.body.action"
}