FROM golang:latest AS build

WORKDIR /go/src/

COPY . .

RUN go build hello.go

FROM scratch AS final

WORKDIR /go/bin/

COPY --from=build /go/src/hello .

CMD [ "./hello" ]